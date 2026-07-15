// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pegdjtmwqfktalucbyrf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ntRUOHQZy1QxXdmfPiRamg_Qs0R1ThU';

// Initialize the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
});

// Setup global auth listener to maintain session reliably
supabase.auth.onAuthStateChange((event, session) => {
    console.log(`[Supabase Auth] Event: ${event}`, session ? 'Session active' : 'No session');
    if (session) {
        localStorage.setItem('careez_logged_in', 'true');
        localStorage.setItem('careez_user', JSON.stringify(session.user));
        // Remove pending user if we eventually got a real session
        localStorage.removeItem('careez_pending_user');
    }
});

// Helper: robust session fetch specifically for protected pages
export async function requireAuth() {
    // 1. Fetch from Supabase directly
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
        console.error('[Supabase Auth] getSession error:', error.message);
    }
    
    let user = session?.user || null;

    // 2. Fallback check for users who just signed up but email is unconfirmed (no session given)
    if (!user) {
        const pendingRaw = localStorage.getItem('careez_pending_user');
        if (pendingRaw) {
            try { 
                user = JSON.parse(pendingRaw); 
                console.log('[Supabase Auth] Using pending sign-up user from localStorage');
            } catch (_) {}
        }
    }

    // 3. If completely unathenticated, redirect
    if (!user) {
        console.warn('[Supabase Auth] Access denied. Redirecting to login.');
        window.location.href = 'login.html';
        return null;
    }

    return { user, session };
}

// Legacy helper for pages still using it directly
export async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error('[Supabase Auth] getSession error:', error.message);
    return data.session;
}

// Helper: sign out
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('[Supabase Auth] Error signing out:', error.message);
    }
    localStorage.removeItem('careez_logged_in');
    localStorage.removeItem('careez_user');
    localStorage.removeItem('careez_pending_user');
}

// Helper: redirect after login based on profile completion
export async function redirectAfterLogin(user) {
    try {
        const { data: profile, error } = await supabase
            .from('Profile')
            .select('career')
            .eq('id', user.id)
            .single();

        if (error) {
            console.error('[Supabase DB] Profile check error:', error.message);
        }

        if (profile && profile.career) {
            window.location.href = 'roadmap.html';
        } else {
            window.location.href = 'student_details.html';
        }
    } catch (err) {
        console.error('[Supabase DB] Exception during redirect check:', err.message);
        window.location.href = 'student_details.html';
    }
}

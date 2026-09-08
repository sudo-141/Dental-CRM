import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/superadmin')) {
    const sessionCookie = request.cookies.get('session');

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      const payload = await decrypt(sessionCookie.value);
      if (payload.role !== 'Super Admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch {
      // Invalid or expired token
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/superadmin/:path*',
};

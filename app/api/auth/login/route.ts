import { NextResponse } from 'next/server';
import dummyCredentials from '@/dummy-credentials.json';
import { encrypt } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = dummyCredentials.users.find(
      (u) => u.username === email && u.password === password
    );

    if (user) {
      const response = NextResponse.json({ success: true, role: user.role });

      const session = await encrypt({ role: user.role, email: user.username });

      response.cookies.set({
        name: 'session',
        value: session,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

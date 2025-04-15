// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Si l'utilisateur n'est pas connecté (pas de cookie par exemple)
  const isLoggedIn = request.cookies.get('auth')?.value === 'true';

  if (!isLoggedIn && url.pathname !== '/login.html') {
    url.pathname = '/login.html';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

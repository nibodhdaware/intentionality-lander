import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  // If the host starts with www., redirect to the non-www version
  if (host && host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const url = request.nextUrl.clone();
    url.host = newHost;
    
    // Use 301 (Permanent Redirect) for SEO
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Only run middleware on pages, not on static files or API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml, etc.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ai.txt|llms.txt).*)',
  ],
};

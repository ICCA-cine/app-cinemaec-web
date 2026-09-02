import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Modo En Desarrollo / Mantenimiento:
 * Redirige todas las solicitudes de páginas a la raíz ("/") donde se muestra el aviso de CinemaEc en desarrollo.
 * 
 * NOTA PARA REACTIVAR EL SITIO:
 * Descomentar la lógica de rutas protegidas original que se encuentra guardada abajo.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirigir cualquier ruta que no sea la raíz "/" hacia "/"
  if (pathname !== "/") {
    const url = new URL("/", request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Excluir recursos estáticos y assets de Next.js
     */
    "/((?!api|_next/static|_next/image|_next/data|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}

/*
=============================================================================
LÓGICA ORIGINAL GUARDADA PARA CUANDO SE RESTABLEZCA EL SERVICIO:
=============================================================================

const protectedRoutes = [
  "/profile",
  "/movies",
  "/settings",
  "/home",
  "/rea-spaces",
]

const adminRoutes = ["/admin"]

const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
]

export function proxyOriginal(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("token")?.value

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route))
  const isPublicRoute = publicRoutes.some((route) => pathname === route)

  if ((isProtectedRoute || isAdminRoute) && !token) {
    const url = new URL("/login", request.url)
    if (isProtectedRoute) {
      url.searchParams.set("redirect", pathname)
    }
    return NextResponse.redirect(url)
  }

  if (token && isPublicRoute && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/home", request.url))
  }

  return NextResponse.next()
}
*/

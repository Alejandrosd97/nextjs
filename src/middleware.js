import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import {jwtVerify} from 'jose'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const jwt = request.cookies.get('myToken')?.value

  if(request.nextUrl.pathname.includes('/pacientes') ||
   request.nextUrl.pathname.includes('/createPost')){
    if (jwt){
      const {payload}  = await jwtVerify(jwt, new TextEncoder().encode('123'))
      if (payload.role != 'admin'){
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
    else{
      return NextResponse.redirect(new URL('/login?next=%2Fpacientes', request.url))
    }
  }

   if (request.nextUrl.pathname.includes('/api/paciente') ||
    request.nextUrl.pathname.includes('/api/post')){
      // 
      if (jwt){
      const {payload}  = await jwtVerify(jwt, new TextEncoder().encode('123'))
      if (payload.role != 'admin'){
        return NextResponse.json('no autorizado')
      }
    }
    if (!jwt){
      return NextResponse.json('no auth')
    }
  }
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/contact',
// }
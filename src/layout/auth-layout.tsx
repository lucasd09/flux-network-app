import { Navigate, Outlet } from "react-router-dom"

export const AuthLayout = () => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    return <Navigate to={'/app'} />
  }

  return <div className="min-h-screen flex flex-col md:flex-row">
    <div className="w-[600px]">
      <Outlet />
    </div>
    <div className="hidden md:flex flex-2 flex-col items-center justify-center bg-muted px-12">
      <div className="max-w-md text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-team-purple-700 mb-4">
          Welcome to Flux Network
        </h2>
        <p className=" mb-10">
          Modern task management for companies and teams. Focus on what matters and boost your team&apos;s productivity.
        </p>
        <svg
          width={240}
          height={160}
          viewBox="0 0 320 120"
          fill="none"
          className="mx-auto"
        >
          <rect x="10" y="30" width="80" height="80" rx="20" fill="#ede9fe" />
          <rect x="100" y="10" width="80" height="100" rx="24" fill="#a78bfa" />
          <rect x="190" y="40" width="60" height="70" rx="15" fill="#c4b5fd" />
          <rect x="260" y="60" width="46" height="46" rx="12" fill="#ede9fe" />
        </svg>
      </div>
    </div>
  </div>
}
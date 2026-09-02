import MaintenanceView from "./MaintenanceView"
// Nota: HomeClient se mantiene intacto en src/app/HomeClient.tsx para reactivar el sitio completo posteriormente.
// import HomeClient from "./HomeClient"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function HomePage() {
  return <MaintenanceView />
}


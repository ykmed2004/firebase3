import AuthComponent from "@/app/components/AuthComponent";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4">Firebase 認証</h1>
      <AuthComponent />
    </div>
  );
}


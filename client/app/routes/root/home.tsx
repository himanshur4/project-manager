import { Button } from "@/components/ui/button";
import type { Route } from "../../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Pilot" },
    { name: "description", content: "Welcome to Project Pilot" },
  ];
}
const Homepage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Link to="/sign-in">
      <Button className="bg-violet-500 text-white">
        Login
      </Button>
      </Link>
      <Link to="/sign-up">
      <Button variant="outline" className="bg-violet-500 text-white">
        Sign Up
      </Button>
      </Link>
    </div>
  )
}

export default Homepage

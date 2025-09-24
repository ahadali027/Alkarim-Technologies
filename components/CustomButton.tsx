import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CustomButton({title}:{title?:string}) {
  return (
    <div className="">
      <Button
        variant="outline"
        className="py-7 cursor-pointer w-full bg-transparent  transition"
      >
        <span className="font-semibold text-lg">{title}</span>
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}

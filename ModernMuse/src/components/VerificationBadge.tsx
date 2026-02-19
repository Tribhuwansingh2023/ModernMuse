import { CheckCircle2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  isVerified: boolean;
  verificationDate?: string;
  size?: "sm" | "md" | "lg";
}

export function VerificationBadge({
  isVerified,
  verificationDate,
  size = "md",
}: VerificationBadgeProps) {
  if (!isVerified) return null;

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const icon = (
    <CheckCircle2
      className={`${sizeClasses[size]} text-blue-500 fill-blue-50`}
    />
  );

  if (!verificationDate) {
    return icon;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">
            Verified Creator since{" "}
            {new Date(verificationDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

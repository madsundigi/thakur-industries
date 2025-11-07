import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

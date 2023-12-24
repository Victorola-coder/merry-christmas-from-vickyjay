import { cn } from "./helpers/class-name";
interface TypographyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
export function TypographyH1({
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      {...props}
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      {...props}
      className={cn(
        "text-2xl font-semibold tracking-tight scroll-m-20",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h4
      {...props}
      className={cn(
        "font-semibold tracking-tight sm:text-xl scroll-m-20",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}

export function PinkText({ className, children, ...props }: TypographyProps) {
  return (
    <span {...props} className={cn("text-pink-500", className)}>
      {children}
    </span>
  );
}

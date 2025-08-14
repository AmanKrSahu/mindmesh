import { LineSquiggle } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link to={url}>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <LineSquiggle className="size-5" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;

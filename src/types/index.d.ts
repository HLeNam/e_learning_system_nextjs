type TMenuItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

// User
type TCreateParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export { TMenuItem, TCreateParams };

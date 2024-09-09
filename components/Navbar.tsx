import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import MobileNavButton from "./mobile-nav-button";
import MobileNav from "./ui/mobile-main-nav";

export const revalidate = 0
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex items-center h-16">
          <MobileNavButton />
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
          <MobileNav data={categories} />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
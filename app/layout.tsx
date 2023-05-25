import { ClientOnly } from "./components/ClientOnly";
import { RegisterModal } from "./components/modal/RegisterModal";
import Navbar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./provider/ToasterProvider";
import { LoginModal } from "./components/modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { RentModal } from "./components/modal/RentModal";
import SearchModal from "./components/modal/SearchModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/app/styles/globals.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer/index"


export const metadata: Metadata = {
  title: "Agência de Viagens",
  description: "A Aurora Travel é a sua agência de viagens especializada em experiências únicas. Explore destinos incríveis, descubra novas culturas e viva momentos inesquecíveis com pacotes personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header text="Aurora Travel"/>
        {children}
        <Footer />
      </body>
      
    </html>
  );
}

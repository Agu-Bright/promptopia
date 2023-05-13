import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
//change the metadata for improved seo
export const metadata = {
  title: "Promptopia",
  description: "discover and share AI prmpts",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;

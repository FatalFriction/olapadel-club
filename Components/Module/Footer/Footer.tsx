import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col bg-foreground w-full text-accent"
      style={{ fontFamily: "var(--font-faculty)" }}
    >
      <div className="w-full max-w-[1750px] mx-auto my-10 px-10">
        <div
          className="
            flex items-start justify-between w-full
            max-lg:flex-col max-lg:gap-12 max-lg:items-center
          "
        >
          <div className="flex flex-col max-w-lg max-lg:text-center max-lg:items-center">
            <p className="text-xl">
              Padel sports for everyone <br />
              Fun, easy, and a great way to make new friends quickly.
            </p>

            <div className="flex mt-4 gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                <SocialIcon
                  network="whatsapp"
                  bgColor="none"
                  fgColor="#23221E"
                  url="https://wa.me/6282225638033"
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                <SocialIcon
                  network="instagram"
                  bgColor="none"
                  fgColor="#23221E"
                  url="https://www.instagram.com/ola.padelclub/"
                />
              </div>
            </div>
          </div>

          <div
            className="
              flex flex-row gap-40 ml-auto
              max-lg:flex-col max-lg:gap-10 max-lg:ml-0 max-lg:text-center
            "
          >
            <div>
              <h4 className="font-bold mb-4 text-xl">Navigation</h4>
              <div className="mt-10 text-lg">
                <p className="mb-2 hover:underline cursor-pointer">
                  Trial Class
                </p>
                <p className="mb-2 hover:underline cursor-pointer">
                  Padel Community
                </p>
                <p className="mb-2 hover:underline cursor-pointer">
                  Padel Equipment
                </p>
                <p className="mb-2 hover:underline cursor-pointer">
                  Testimonials
                </p>
                <p className="mb-2 hover:underline cursor-pointer">Galleries</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-xl">Contact Info</h4>
              <div className="mt-10 text-lg max-w-xs flex flex-col max-lg:mx-auto">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=padelclub.ola@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 hover:underline cursor-pointer"
                >
                  padelclub.ola@gmail.com
                </a>
                <a
                  href="https://maps.app.goo.gl/v5hLWkbAknfut7tG9"
                  className="mb-2 hover:underline cursor-pointer"
                >
                  Green Garden Residence <br />
                  Block C5 nomor 2 dan 3, Kec. Kembangan, Kota Jakarta Barat.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
    w-full mx-auto my-20
    h-[190px] mediumbig:h-[200px]
  "
        style={{
          backgroundImage: "url('/OLA-HOR.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </footer>
  );
};

export default Footer;

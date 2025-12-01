import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col p-4 bg-foreground w-full text-accent"
      style={{ fontFamily: "var(--font-faculty)" }}
    >
      <div className="w-full max-w-[1750px] mx-auto my-10 px-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-col max-w-lg">
            <p className="text-xl">
              Padel sports for everyone <br />
              Fun, easy, and a great way to make a new friends quickly.
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
                  url="https://www.instagram.com/"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-40 ml-auto">
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
              <div className="mt-10 text-lg max-w-xs flex flex-col">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=padelclub.ola@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 hover:underline cursor-pointer"
                >
                  padelclub.ola@gmail.com
                </a>
                <a className="mb-2 hover:underline cursor-pointer" href="https://maps.app.goo.gl/v5hLWkbAknfut7tG9">
                  Green Garden Residence <br/> Block C5 nomor 2 dan 3, Kec. Kembangan, Kota Jakarta Barat.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-repeat my-20 mx-auto big:bg-size-600 mediumbig:h-[200px] mediumbig:bg-size-580 bg-size-550 h-[180px]"
        style={{
          backgroundImage: "url('/OLA-HOR.png')",
        }}
      />
    </footer>
  );
};

export default Footer;

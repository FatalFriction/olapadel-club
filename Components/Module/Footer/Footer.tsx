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
                  network="facebook"
                  bgColor="none"
                  fgColor="#23221E"
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                <SocialIcon network="x" bgColor="none" fgColor="#23221E" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                <SocialIcon
                  network="instagram"
                  bgColor="none"
                  fgColor="#23221E"
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                <SocialIcon
                  network="youtube"
                  bgColor="none"
                  fgColor="#23221E"
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
              <div className="mt-10 text-lg max-w-xs">
                <p className="mb-2 hover:underline cursor-pointer">
                  padelclub.ola@gmail.com
                </p>
                <a className="mb-2 hover:underline cursor-pointer" href="https://maps.app.goo.gl/v5hLWkbAknfut7tG9">
                  Green Garden Residence <br/> Block C5 nomor 2 dan 3, Kec. Kembangan, Kota Jakarta Barat.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[200px] bg-repeat my-20 mx-auto"
        style={{
          backgroundImage: "url('/OLA-HOR.png')",
          backgroundSize: "600px",
        }}
      />
    </footer>
  );
};

export default Footer;

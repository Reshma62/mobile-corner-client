const Footer = () => {
  return (
    <footer className=" pt-10 bg-base-200 text-base-content">
      <div className="footer w-[1320px] mx-auto">
        <aside>
          <h2 className="text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400 text-transparent font-bold">
            Moblie Corner
          </h2>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer footer-center border-t mt-5 border-solid border-indigo-300  text-base-content">
        <aside>
          <p className="py-4 ">
            Copyright © 2023 - All right reserved by ACME Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

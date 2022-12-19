const Footer = () => {
  return (
    <div className="text-[#8F8989] flex justify-between xl:justify-between h-48 place-items-center">
      <div>
        <span>Gift for</span>{' '}
        <a href="https://instagram.com/chaehyunsta?igshid=YTY2NzY3YTc=">
          {' '}
          @chaehyunsta
        </a>
      </div>
      <div>
        <div>
          <span>Creator </span>
          <a href="https://instagram.com/hyeleeeeen?igshid=YTY2NzY3YTc=">
            @hyeleeeeen
          </a>
        </div>
        <a
          className="mr-8"
          href="https://www.figma.com/proto/RX7b8ONpXE0pbPMOqb0iKg/My-Friend's-Day?node-id=1%3A6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6"
        >
          figma
        </a>
        <a href="https://github.com/hyeleeeeen/birthday_project">github</a>
      </div>
    </div>
  );
};

export default Footer;

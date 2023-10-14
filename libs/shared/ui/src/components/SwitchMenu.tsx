interface MenuItemI {
  text: string;
  component: JSX.Element;
}

interface SwitchMenuProps {
  menuItems: MenuItemI[];
  activeIndex: number;
  setIndex: (index: number) => void;
}

const SwitchMenu = ({ menuItems, activeIndex, setIndex }: SwitchMenuProps): JSX.Element => {
  return (
    <div className="flex gap-12">
      {menuItems.map((menuItem, index) => {
        return (
          <button
            key={'menuItem' + index}
            onClick={() => {
              setIndex(index);
            }}
            className="cursor-pointer"
          >
            <h1
              className={`text-[18px] font-medium rounded-md ${
                activeIndex === index ? 'text-[#04A5C2] bg-[#CDEDF3]' : ''
              } px-8 py-2`}
            >
              {menuItem.text}
            </h1>
          </button>
        );
      })}
    </div>
  );
};

export default SwitchMenu;

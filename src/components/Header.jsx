import Logo from "/logo.png";
import {
  Button,
  Title3,
  Switch,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import {
  WeatherSunnyFilled,
  WeatherMoonFilled,
  NavigationFilled,
} from "@fluentui/react-icons";

function Header({ theme, setTheme }) {
  const isDarkMode = theme === "dark";

  return (
    <header className="bg-white/10 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src={Logo} alt="logo" className="misc-logo md:" />
        <Title3
          as="h1"
          className={`text-2xl font-bold bg-gradient-to-r from-[#B366FF] to-[#0066FF] text-transparent bg-clip-text ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          <span className="hidden md:inline">
            Microsoft Ignite Students Club
          </span>
          <span className="inline md:hidden">Ignite Students Club</span>
        </Title3>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4">
            {["Home", "About", "Events", "Team", "Contact"].map((item, i) => (
              <li key={i}>
                <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`}>
                  <Button appearance="subtle">{item}</Button>
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <Menu>
              <MenuTrigger>
                <Button appearance="outline">
                  <NavigationFilled />
                </Button>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {["Home", "About", "Events", "Team", "Contact"].map(
                    (item, i) => (
                      <MenuItem key={i}>
                        <a
                          href={
                            item === "Home" ? "#" : `#${item.toLowerCase()}`
                          }
                        >
                          {item}
                        </a>
                      </MenuItem>
                    ),
                  )}
                  <MenuItem>
                    <Switch
                      checked={isDarkMode}
                      onChange={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                        localStorage.setItem(
                          "theme",
                          theme === "light" ? "dark" : "light",
                        );
                      }}
                      label={
                        theme === "light" ? (
                          <WeatherSunnyFilled />
                        ) : (
                          <WeatherMoonFilled />
                        )
                      }
                    />
                  </MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </nav>

        <div className="hidden md:block">
          <Switch
            checked={isDarkMode}
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
              localStorage.setItem(
                "theme",
                theme === "light" ? "dark" : "light",
              );
            }}
            label={
              theme === "light" ? <WeatherSunnyFilled /> : <WeatherMoonFilled />
            }
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

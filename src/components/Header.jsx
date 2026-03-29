import { useState } from "react";
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

/**
 * Header Component
 *
 * Renders the main navigation bar with a Glassmorphism (Mica) effect.
 * Includes responsive navigation and a theme toggle switch.
 *
 * @param {Object} props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {function} props.setTheme - Function to update the theme
 */
function Header({ theme, setTheme }) {
  const isDarkMode = theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = ["Home", "About", "Events", "Team", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="MISC Logo"
            className="h-10 w-auto drop-shadow-md"
          />
          <Title3
            as="h1"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-misc-blue to-misc-purple text-transparent bg-clip-text drop-shadow-sm"
          >
            <span className="hidden md:inline">
              Microsoft Ignite Students Club
            </span>
            <span className="inline md:hidden">MISC</span>
          </Title3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-2 mr-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`}>
                  <Button
                    appearance="subtle"
                    className="font-medium hover:bg-misc-blue/10 dark:hover:bg-misc-blue/20 transition-colors"
                  >
                    {item}
                  </Button>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Desktop) */}
          <div className="flex items-center border-l border-slate-300 dark:border-slate-700 pl-4">
            <Switch
              checked={isDarkMode}
              onChange={handleThemeChange}
              label={
                isDarkMode ? (
                  <WeatherMoonFilled className="text-misc-lightBlue" />
                ) : (
                  <WeatherSunnyFilled className="text-amber-500" />
                )
              }
            />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Switch
            checked={isDarkMode}
            onChange={handleThemeChange}
            label={
              isDarkMode ? (
                <WeatherMoonFilled className="text-misc-lightBlue" />
              ) : (
                <WeatherSunnyFilled className="text-amber-500" />
              )
            }
          />
          <Menu
            open={isMobileMenuOpen}
            onOpenChange={(e, data) => setIsMobileMenuOpen(data.open)}
          >
            <MenuTrigger>
              <Button
                appearance="transparent"
                icon={<NavigationFilled className="text-xl dark:text-white" />}
              />
            </MenuTrigger>
            <MenuPopover className="glass-card mt-2 border-none shadow-2xl">
              <MenuList>
                {navItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a
                      href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                      className="block w-full font-medium dark:text-white py-2 px-4"
                    >
                      {item}
                    </a>
                  </MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

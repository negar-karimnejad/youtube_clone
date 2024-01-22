import { SidebarBox, SidebarStack } from "../theme/theme";
import { categories } from "../utilities/constants";

// eslint-disable-next-line react/prop-types
function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <SidebarStack direction="row">
      {categories.map((category, index) => (
        <SidebarBox
          key={index}
          onClick={() => setActiveCategory(category.name)}
          style={{
            backgroundColor: activeCategory === category.name && "#FC1503",
          }}
        >
          <span
            style={{
              color: activeCategory === category.name ? "#FFF" : "#FC1503",
            }}
          >
            {category.icon}
          </span>
          <span style={{ color: "#FFF" }}>{category.name}</span>
        </SidebarBox>
      ))}
    </SidebarStack>
  );
}

export default Sidebar;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './Tabs.scss';

const Tabs = (props) => {
  console.log(props);
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="tabs">
      <ol className="tab-list">
        {props.children.map((child) => {
          // display each tab (heading)
          return (
            <Tab
              activeTab={activeTab}
              key={child.props.label}
              label={child.props.label}
              setClick={onClickTabItem}
            />
          );
        })}
      </ol>

      <div className="tab-content">
        {/* display the tab content based on the active tab */}
        {props.children.map((child) => {
          console.log(child);
          if (child.props.label !== activeTab) {
            return undefined;
          }
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.array
};

export default Tabs;

import React from 'react';
import { useStyles } from './CustomTab.styles';
import clsx from 'clsx';

const REACT_DATA = [
  {
    title: `React`,
    description: `React makes it painless to create interactive UIs. Design simple
views for each state in your application, and React will
efficiently update and render just the right components when your
data changes.`,
  },
];

const ANGULAR_DATA = [
  {
    title: `Angular`,
    description: `Angular is an application design framework and development
    platform for creating efficient and sophisticated single-page
    apps.`,
  },
];

const EMBER_DATA = [
  {
    title: `Ember`,
    description: `Ember.js is a productive, battle-tested JavaScript framework for
    building modern web applications. It includes everything you need
    to build rich UIs that work on any device.`,
  },
];

const VUE_DATA = [
  {
    title: `Vue`,
    description: `Vue (pronounced /vju/, like view) is a progressive framework for
    building user interfaces. Unlike other monolithic frameworks, Vue
    is designed from the ground up to be incrementally adoptable.`,
  },
];

const TabList: React.FC<any> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const TabItem: React.FC<any> = ({ title, children, ...props }) => {
  return <div {...props}>{title || children}</div>;
};

const TabContent: React.FC<any> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const TabPanel: React.FC<any> = ({ data, ...props }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <div key={index} {...props}>
          <h2>{`${item.title}`}</h2>
          <p>{`${item.description}`}</p>
        </div>
      ))}
    </>
  );
};

interface CustomTabProps {}

const CustomTab: React.FC<CustomTabProps> = (props) => {
  const classes = useStyles();

  const lineRef = React.useRef(null);

  const [tab, setTab] = React.useState<number>(1);

  React.useEffect(() => {
    const line: any = lineRef.current;
    const tabItem: any = document.querySelector(`.${classes.tabItem}.active`);

    if (line && tabItem) {
      line.style.left = `${tabItem.offsetLeft}px`;
      line.style.width = `${tabItem.offsetWidth}px`;
    }
  }, [tab, classes.tabItem]);

  const handleChangeTab = React.useCallback((tab: number) => {
    setTab(tab);
  }, []);

  return (
    <>
      <TabList className={classes.tabList}>
        <TabItem
          className={clsx(classes.tabItem, { active: tab === 1 })}
          onClick={() => handleChangeTab(1)}
          title={`React`}
        />
        <TabItem
          className={clsx(classes.tabItem, { active: tab === 2 })}
          onClick={() => handleChangeTab(2)}
          title={`Angular`}
        />
        <TabItem
          className={clsx(classes.tabItem, { active: tab === 3 })}
          onClick={() => handleChangeTab(3)}
          title={`Ember`}
        />
        <TabItem
          className={clsx(classes.tabItem, { active: tab === 4 })}
          onClick={() => handleChangeTab(4)}
          title={`Vue.JS`}
        />
        <div ref={lineRef} className={classes.line}></div>
      </TabList>

      <TabContent className={classes.tabContent}>
        {tab === 1 && (
          <TabPanel className={classes.tabPanel} data={REACT_DATA} />
        )}
        {tab === 2 && (
          <TabPanel className={classes.tabPanel} data={ANGULAR_DATA} />
        )}
        {tab === 3 && (
          <TabPanel className={classes.tabPanel} data={EMBER_DATA} />
        )}
        {tab === 4 && <TabPanel className={classes.tabPanel} data={VUE_DATA} />}
      </TabContent>
    </>
  );
};

export default CustomTab;

import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabs.css';
import '../Tabs/Tab1/Tab1'
import Tab1 from "./Tab1/Tab1";
import Tab2 from "./Tab2/Tab2";
import Tab3 from "./Tab3/Tab3";

class ClassTabs extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab><br/>Ступени<br/>мастерства<br/></Tab>
                    <Tab><br/>Сотрудникам<br/><br/></Tab>
                    <Tab><br/>Руководителям<br/><br/></Tab>
                </TabList>
                <TabPanel>
                    <Tab1 />
                </TabPanel>
                <TabPanel>
                    <Tab2 />
                </TabPanel>
                <TabPanel>
                    <Tab3 />
                </TabPanel>
            </Tabs>
        )
    }

}

export default ClassTabs;

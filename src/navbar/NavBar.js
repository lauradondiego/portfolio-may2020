import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tasd</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>laurat</Tab.Pane> },
]

const TabExampleVerticalTabular = () => (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default TabExampleVerticalTabular
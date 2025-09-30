import { useContext } from 'react';
import Accordian from '../accordian';
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tact-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component : <LightDarkMode/>
        },
        {
            key: 'showTicTactoeBoard',
            component : <TicTacToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component : <RandomColor/>
        },
        {
            key: 'showAccoordin',
            component : <Accordian/>
        },
        {
            key: 'showTreeView',
            component : <TreeView/>
        },
        {
            key: 'showTabs',
            component: <TabTest/>
        }
    ]
    return <div>
        <h1>Feature Flags</h1>
    </div>
}
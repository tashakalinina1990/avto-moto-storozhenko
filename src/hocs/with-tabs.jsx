import React, {PureComponent} from 'react';

import {extend} from '../utils/utils';

export const withTabs = (Component) => {
	class WithTabs extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				currentTab: `SPECIFICATIONS`,
			}

			this.onTabChange = this.onTabChange.bind(this);
		}

		onTabChange(tab) {
			if (this.state.currentTab === tab) {
				return;
			};
			this.setState(extend(this.state, {currentTab: tab}));
		}

		render() {
			return (
				<Component
					currentTab={this.state.currentTab}
					onTabChange={this.onTabChange}
				/>
			);
		}
	}

	return WithTabs;
};

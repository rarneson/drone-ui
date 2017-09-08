import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExpandIcon, BackIcon } from "shared/components/icons/index";
import style from "./breadcrumb.less";

// breadcrumb separater icon.
export const SEPARATOR = <ExpandIcon size={18} className={style.separator} />;

// breadcrumb back button.
export const BACK_BUTTON = <BackIcon size={18} className={style.back} />;

// helper function to rener a list item.
const renderItem = (element, index) => {
	return <li key={index}>{element}</li>;
};

export default class Breadcrumb extends Component {
	render() {
		const { elements } = this.props;
		return <ol className={style.breadcrumb}>{elements.map(renderItem)}</ol>;
	}
}

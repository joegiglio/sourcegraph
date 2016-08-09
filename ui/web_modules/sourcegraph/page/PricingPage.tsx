// tslint:disable

import * as React from "react";
import {Hero, Heading, Panel, Button} from "sourcegraph/components/index";
import * as styles from "./Page.css";
import {Link} from "react-router";
import * as base from "sourcegraph/components/styles/_base.css";
import {CheckIcon} from "sourcegraph/components/Icons";
import Helmet from "react-helmet";
import * as AnalyticsConstants from "sourcegraph/util/constants/AnalyticsConstants";

function PricingPage(props: {}, {signedIn, eventLogger}) {
	return (
		<div>
			<Helmet title="Pricing" />
			<Hero color="transparent" className={base.pv5 || ""}>
				<div className={styles.container_wide}>
					<Heading level="1">Pricing</Heading>
					<Heading level="4" className={styles.subtitle || ""}>Sourcegraph is free to use for public and private code.</Heading>
				</div>
			</Hero>
			<div className={styles.content_wide}>
				<div className={styles.plans}>
					<div className={styles.plan}>
						<div className={styles.plan_box}>
							<Panel color="purple" inverse={true} hover={false} className={styles.plan_panel || ""}>
								<Heading level="3" color="white" align="center">Free</Heading>
								<Heading level="1" color="white" align="center"><span className={styles.currency}>$</span><span className={styles.amount}>0</span></Heading>
								<p>For individuals and teams, for public and private code</p>
							</Panel>
							{!signedIn && <Link to="/join"
								onClick={(v) => v && eventLogger.logEventForCategory(AnalyticsConstants.CATEGORY_PRICING, AnalyticsConstants.ACTION_CLICK, "ClickPricingCTA", {plan: "free", page_name: AnalyticsConstants.PAGE_PRICING})}>
								<Button block={true} className={styles.plan_cta || ""} color="purple">Sign up</Button>
							</Link>}
							{signedIn && <Button block={true} outline={true} color="purple" className={styles.plan_cta_noop || ""}><CheckIcon className={styles.icon} /> Your current plan</Button>}
						</div>
						<div className={styles.details}>
							<Heading level="4" color="purple" underline="purple">
								Free includes<br/>
								<span className={styles.details_cumulative}>Features every dev loves:</span>
							</Heading>
							<ul className={styles.details_list}>
								<li>Semantic search, browsing, and cross-references across unlimited GitHub repositories</li>
								<li>Single branch, latest commit for private projects</li>
								<li>All branches, all recent commits for public projects</li>
								<li>Automatic usage examples</li>
								<li>Web browser &amp; editor integrations</li>
							</ul>
						</div>
					</div>

					<div className={styles.plan}>
						<div className={styles.plan_box}>
							<Panel color="green" inverse={true} hover={false} className={styles.plan_panel || ""}>
								<Heading level="3" color="white" align="center">Standard</Heading>
								<Heading level="1" color="white" align="center"><span className={styles.currency}>$</span><span className={styles.amount}>50</span></Heading>
								<p>per&nbsp;user per&nbsp;month</p>
							</Panel>
							<Link to="/contact"
								onClick={(v) => v && eventLogger.logEventForCategory(AnalyticsConstants.CATEGORY_PRICING, AnalyticsConstants.ACTION_CLICK, "ClickPricingCTA", {plan: "standard", page_name: AnalyticsConstants.PAGE_PRICING})}>
								<Button block={true} className={styles.plan_cta || ""} color="green">Contact us</Button>
							</Link>
						</div>
						<div className={styles.details}>
							<Heading level="4" color="green" underline="green">
								Standard includes<br/>
								<span className={styles.details_cumulative}>Everything in Free, and:</span>
							</Heading>
							<ul className={styles.details_list}>
								<li>Unlimited branches and commits for private projects</li>
								<li>Mandatory 2-factor authentication</li>
								<li>Priority support</li>
							</ul>
						</div>
					</div>

					<div className={styles.plan}>
						<div className={styles.plan_box}>
							<Panel color="blue" inverse={true} hover={false} className={styles.plan_panel || ""}>
								<Heading level="3" color="white" align="center">Enterprise</Heading>
								<Heading level="1" color="white" align="center"><span className={styles.currency}>$</span><span className={styles.amount}>100</span></Heading>
								<p>per&nbsp;user per&nbsp;month</p>
							</Panel>
							<Link to="/contact"
								onClick={(v) => v && eventLogger.logEventForCategory(AnalyticsConstants.CATEGORY_PRICING, AnalyticsConstants.ACTION_CLICK, "ClickPricingCTA", {plan: "free", page_name: AnalyticsConstants.PAGE_PRICING})}>
								<Button block={true} className={styles.plan_cta || ""} color="blue">Contact us</Button>
							</Link>
						</div>
						<div className={styles.details}>
							<Heading level="4" color="blue" underline="blue">
								Enterprise includes<br/>
								<span className={styles.details_cumulative}>Everything in Standard, and:</span>
							</Heading>
							<ul className={styles.details_list}>
								<li>Unlimited API integrations</li>
								<li>99.99% guaranteed uptime SLA</li>
								<li>24/7 support</li>
								<li>Option to run Sourcegraph in your own network</li>
							</ul>
						</div>
					</div>
				</div>
				<p className={styles.footer}>Plans are billed annually. Special pricing is available for qualified non-profit organizations. Questions? <Link to="/contact">Contact us.</Link></p>
			</div>
		</div>
	);
}
(PricingPage as any).contextTypes = {
	signedIn: React.PropTypes.bool,
	eventLogger: React.PropTypes.object.isRequired,
};

export default PricingPage;

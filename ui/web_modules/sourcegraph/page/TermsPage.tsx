// tslint:disable

import * as React from "react";
import {Hero, Heading} from "sourcegraph/components/index";
import * as styles from "./Page.css";
import * as base from "sourcegraph/components/styles/_base.css";
import Helmet from "react-helmet";

function TermsPage(props: {}, {signedIn}) {
	return (
		<div>
			<Helmet title="Terms" />
			<Hero pattern="objects" color="dark" className={base.pv1}>
				<div className={styles.container}>
					<Heading level="3" color="white">Sourcegraph Terms of Service</Heading>
				</div>
			</Hero>
			<div className={styles.content}>
                <p>These Terms of Service are provided by Sourcegraph, Inc. (“<b>Sourcegraph</b>,” “<b>we</b>,” “<b>our</b>,” or “<b>us</b>”) and govern your use of the software we make available (the “Software”). To use the Software, Users must at all times agree to and abide by these Terms. The Software allows you to automatically analyze your code and certain other information related to your organization and your code (such code and information, collectively, “<b>User Data</b>”).</p>

                <p>Sourcegraph provides a software platform designed to enhance code intelligence. That is, our Software draws insights from automatic analysis of your organization’s code, giving developers and teams instant access to key information about their codebase.</p>

                <p>Our Software may be made available on a hosted basis or in source code or binary form, and under two (2) different flavors of license depending on how many members of your team will be using it. If your team has fewer than fifteen (15) Users, then your usage of the Software will be subject to the <a href="https://fair.io/">Fair Source License</a>. If your team has fifteen (15) or more Users, then your usage of the Software will be subject to these Terms. In addition, certain portions of these Terms will apply only to those Users who have purchased a license to use certain features of the Software that are made available to enterprise Users subject to such Users’ payment of additional fees (the “<b>Enterprise Features</b>”).</p>

                <p>These Terms of Service constitute a legal contract between you and your company, organization, or entity (“<b>you</b>” or, collectively with other users, “<b>Users</b>”), on the one hand, and Sourcegraph on the other regarding your and your company, organization, or entity’s use of the Software. Sourcegraph may have different roles with respect to different types of Users, and “you” as used in these Terms will apply to the appropriate type of User under the circumstances (e.g., an individual User and/or a Subscribing Organization). If you are using or opening an account with Sourcegraph on behalf of a company, entity, or organization (collectively, the “<b>Subscribing Organization</b>”) then you represent and warrant that you: (i) are an authorized representative of that entity with the authority to bind such entity to these Terms; (ii) have read these Terms; (iii) understand these Terms, and (iv) agree to these Terms on behalf of such Subscribing Organization.</p>

                <p>Please read carefully the following terms and conditions. By registering for and/or using or subscribing to the Software, or by clicking “I Agree,” or otherwise affirmatively manifesting your intent to be bound by these Terms of Service, you signify that you have read, understood, and agree to be bound by the following terms, including any additional guidelines and any future modifications (collectively, the “Terms”), and to the collection and use of your personal information as set forth in the <a href="https://sourcegraph.com/-/privacy">Sourcegraph Privacy Policy</a>.</p>

                <p>Please read these Terms carefully to ensure that you understand each provision. This Agreement contains a mandatory individual arbitration and class action/jury trial waiver provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions.</p>

                <h4>Licenses</h4>

                <p>1.1 General License Grant. Subject to the terms and conditions of these Terms, Sourcegraph hereby grants to you a limited, non-transferable license to use the Software in the manner contemplated by these Terms solely for your internal business purposes; provided that this Section 1.1 does not grant you any right to use any Enterprise Features. Users shall have no right to sub-license or resell the Software or any component thereof.</p>

                <p>1.2 Enterprise Features License Grant. Subject to the terms and conditions of these Terms, and in addition to the rights granted above in Section 1.1, to the extent that you have purchased a license to use the Enterprise Features and are current on all amounts due and payable with respect thereto, Sourcegraph hereby grants to you a limited, non-transferable license to use the Enterprise Features in the manner contemplated by these Terms solely for your internal business purposes. A current list of Enterprise Features is made available on our <a href="https://sourcegraph.com/pricing">Pricing and Payment Terms</a>, and may be updated from time to time at Sourcegraph’s sole and absolute discretion.</p>

                <p>1.3 Limitations on Use. You may not use the Software except as permitted in this Agreement. Except with Sourcegraph’s prior written consent or as expressly permitted under this Agreement, you may not: (a) alter, modify or create any derivative works of the Software, the underlying source code, or the documentation in any way, including without limitation customization, translation or localization; (b) port, reverse compile, reverse assemble, reverse engineer, or otherwise attempt to separate any of the components of the Software or derive the source code for the Software (except to the extent applicable laws specifically prohibit such restriction); (c) copy, redistribute, encumber, sell, rent, lease, sublicense, or otherwise transfer rights to the Software or documentation; (d) remove or alter any trademark, logo, copyright or other proprietary notices, legends, symbols or labels in the Software or documentation; (e) permit a number of Users more than has been authorized by Sourcegraph in writing; or (f) access or use the Software or documentation for the purpose of building a product or service with functionality substantially similar to the Software. You may not release the results of any performance or functional evaluation of any of the Software to any third party without prior written approval of Sourcegraph for each such release. You may not cause or permit any third party to do any of the foregoing.</p>

                <h4>Privacy</h4>

                <p>User privacy is important to us. Please read our <a href="https://sourcegraph.com/-/privacy">Privacy Policy</a> carefully for details relating to the collection, use, and disclosure of your personal information.</p>

                <h4>Additional Terms</h4>

                <p>Certain features of the Software may have their own terms and conditions that you must agree to when you sign up for that particular product, function, feature, or service. Such terms supplement these Terms and are hereby incorporated by reference.</p>

                <h4>Eligibility; Termination</h4>

                <p>You agree that Sourcegraph, in its sole discretion and for any or no reason, may terminate any account (or any part thereof) you may have with Sourcegraph. In addition, Sourcegraph reserves the right to discontinue any aspect of the Software at any time, including the right to discontinue the display and analysis of any User Data. You agree that any termination of your access to the Software or any account you may have or portion thereof may be affected without prior notice, and you agree that Sourcegraph will not be liable to you or any third party for such termination. Any suspected fraudulent, abusive, or illegal activity that may be grounds for termination of your use of the Software may be referred to appropriate law enforcement authorities. These remedies are in addition to any other remedies Sourcegraph may have at law or in equity.</p>

                <h4>Payment Terms; Charges and Taxes</h4>

                <p>If you have purchased a license to use any Enterprise Services, the following provisions apply to you:</p>

                <p>5.1 You are responsible for paying any applicable fees as set forth on our <a href="https://sourcegraph.com/pricing">Pricing and Payment Terms</a> and applicable taxes associated with the Software in a timely manner with a valid payment method. Unless otherwise stated, all fees are quoted in U.S. Dollars. All payments must be made electronically by the methods specified by us either on our website or via the Software. You agree that we may charge your selected payment method for any such fees owed. You are required to keep your billing information current, complete, and accurate (e.g., a change in billing address, credit card number, or expiration date) and to notify Sourcegraph if your selected payment method is cancelled (e.g., for loss or theft). All fees and charges are earned upon receipt by us and are nonrefundable (and there are no credits) except (a) as expressly set forth herein, and/or (b) as required by applicable law.</p>

                <p>5.2 You are responsible for all charges incurred under your account made by you or anyone who uses your account (including your co-workers, colleagues, team-members, etc.). If your payment method fails or you are past due on amounts owed, we may collect fees owed using other collection mechanisms. Your account may be deactivated without notice to you if payment is past due, regardless of the dollar amount. You are also responsible for paying any governmental taxes imposed on your use of the Software, including, but not limited to, sales, use, or value-added taxes. To the extent Sourcegraph is obligated to collect such taxes, the applicable tax will be added to your billing account.</p>

                <p>5.3 Authorization to charge your chosen payment method account will remain in effect until you cancel or modify your preferences within the Software; provided, however, that such notice will not affect charges submitted before Sourcegraph could reasonably act. Your charges may be payable in advance, in arrears, per usage, or as otherwise described when you ordered the applicable service or on the <a href="https://sourcegraph.com/pricing">Pricing and Payment Terms</a>. You agree that charges may be accumulated as incurred and may be submitted as one or more aggregate charges during or at the end of the applicable billing cycle.</p>

                <p>5.4 Sourcegraph reserves the right to change the amount of, or basis for determining, any fees or charges for the Software we provide, and to institute new fees, charges, or terms effective upon prior notice to our Users. You will receive notice of any fee change at least five (5) days before the scheduled date of the transaction and failure to cancel your account as set forth herein will constitute acceptance of such fee change. Any changes to fees will apply only on a prospective basis. If you do not agree to any such changes to fees, charges, or terms, your sole remedy is to cancel your subscription. Fees paid for any subscription term are paid in advance and are not refundable in whole or in part. If you have a balance due on any Service account, you agree that Sourcegraph can charge these unpaid fees to any payment method that you have previously provided.</p>

                <p>5.5 Your Service will be automatically renewed and your credit card account (or other payment method account) will be charged as follows without further authorization from you: (a) every month for monthly subscriptions; (b) upon every one (1) year anniversary for annual subscriptions; (c) such other periodic rate you have selected from among the options offered on the Software. You acknowledge that your subscription is subject to automatic renewals and you consent to and accept responsibility for all related recurring charges to your applicable payment method without further authorization from you and without further notice unless required by law. You acknowledge that the amount of the recurring charge may change if the applicable tax rates change or if there has been a change in the applicable fees.</p>

                <p>5.6 Unless otherwise required by applicable law, for annual subscriptions, you must provide us with written notice of your intention not to renew at least fifteen (15) days prior to the end of the then-current term of your subscription. If you do so, your subscription will be cancelled at the end of the then-current term.</p>

                <h4>User Data</h4>

                <p>6.1 Use of User Data. By analyzing your User Data with the Software, you hereby grant, and represent and warrant that you have all rights necessary to grant, all rights and licenses to the User Data required for Sourcegraph to provide the features and functionality of the Software. While your User Data will remain on your systems, Sourcegraph collects certain information about your use of the Software, including aggregated data about your User Data. You agree that Sourcegraph may collect, analyze, and use data derived from User Data, as well as data about you, and other Users’ access and use of the Software, for purposes of operating, analyzing, improving, or marketing the Software and any related services. If Sourcegraph shares or publicly discloses information (e.g., in marketing materials, or in application development) that is derived from User Data, such data will be aggregated or anonymized to reasonably avoid identification of a specific individual or the User. By way of example and not limitation, Sourcegraph may: (a) track the number of Users on an anonymized aggregate basis as part of Sourcegraph’s marketing efforts to publicize the total number of Users of the Software; (b) analyze aggregated usage patterns for product development efforts; or (c) use aggregated or anonymous data derived from User Data in a form which may not reasonably identify either a particular individual or the User to develop further analytic frameworks and application tools. You further agree that Sourcegraph will have the right, both during and after the term of these Terms, to use, store, transmit, distribute, modify, copy, display, sublicense, and create derivative works of the anonymized, aggregated data.</p>

                <p>6.2 Your Responsibilities for User Data. In connection with User Data, you hereby represent, warrant, and agree that: (a) you have obtained the User Data lawfully, and the User Data does not and will not violate any applicable laws or any person or entity’s proprietary or intellectual property rights; (b) the User Data is free of all viruses, Trojan horses, and other elements that could interrupt or harm the systems or software used by Sourcegraph or its subcontractors to provide the Software; (c) you are solely responsible for ensuring compliance with all privacy laws in all jurisdictions that may apply to User Data provided hereunder; (d) Sourcegraph may exercise the rights in User Data granted hereunder without liability or cost to any third party; and (e) the User Data complies with the terms of these Terms. For purposes of clarity, Sourcegraph takes no responsibility and assumes no liability for any User Data, and you will be solely responsible for your User Data. You may not submit any User Data that includes any information that can be used to identify, locate, or contact any of your employees, customers, users or potential customers or users, including: (1) first and last name; (2) home or other physical address; (3) telephone number; (4) email address or online identifier associated with an individual; (5) social security number, passport number, driver’s license number, or similar identifier; (6) credit or debit card number; (7) employment, financial or health information; or (8) any other information relating to an individual, including cookie information and usage and traffic data or profiles, that is combined with any of the foregoing (collectively, “Personal Data”) without Sourcegraph’s prior written approval.</p>

                <p>6.3 Rights to User Data. For purposes of clarity, you own all right, title and interest (including all intellectual property rights) in and to your User Data.</p>

                <h4>Ownership; Proprietary Rights</h4>

                <p>The Software is owned and operated by Sourcegraph. The visual interfaces, graphics, design, compilation, information, computer code, products, software, services, and all other elements of the Software provided by Sourcegraph, but expressly excluding any of the foregoing owned or licensed by and posted to the Software at the direction of Users (including without limitation User Data) (“<b>Materials</b>”) are protected by intellectual property and other applicable laws. Except for any technology licensed by Sourcegraph, which is owned by and provided by our third-party licensors, all Materials contained in the Software, including without limitation the intellectual property rights therein and thereto, are the property of Sourcegraph or its subsidiaries or affiliated companies. All trademarks, service marks, and trade names are proprietary to Sourcegraph or its affiliates and/or third-party licensors. Except as expressly provided herein, nothing in these Terms shall be deemed to create a license in or under any such Materials or the intellectual property rights therein or thereto, you agree not to sell, license, distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt, create derivative works from, or otherwise make unauthorized use of the Materials.</p>

                <p>You may choose to or we may invite you to submit comments or ideas about the Software, including without limitation about how to improve the Software or our products (“<b>Ideas</b>”). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Sourcegraph under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Sourcegraph does not waive any rights to use similar or related ideas previously known to Sourcegraph, or developed by its employees, or obtained from sources other than you.</p>

                <h4>Third-Party Sites, Information, and Software</h4>

                <p>8.1 The Software may call the servers of other websites or services solely at the direction of and as a convenience to Users (“<b>Third-Party Sites</b>”). Sourcegraph makes no express or implied warranties with regard to the information, or other material, products, or services that are contained on or accessible through Third-Party Sites. Access and use of Third-Party Sites, including the information, material, products, and services on such sites or available through such sites, is solely at your own risk. Further, you acknowledge that the Software may contain copyrighted software of our suppliers which are obtained under a license from such suppliers (“<b>Third-Party Software</b>”). All third-party licensors and suppliers retain all right, title and interest in and to such Third-Party Software and all copies thereof, including all copyright and other intellectual property rights. Your use of any Third-Party Software shall be subject to, and you shall comply with, the terms and conditions of this Agreement, and the applicable restrictions and other terms and conditions set forth in any Third-Party Software documentation or printed materials, including without limitation an end user license agreement.</p>

                <p>8.2 You acknowledge that Sourcegraph does not manage or control the User Data that you analyze with the Software, and accepts no responsibility or liability for that information regardless of whether such User Data is analyzed by you in breach of these Terms.</p>

                <h4>Security and Privacy Settings</h4>

                <p>We have implemented commercially reasonable technical and organizational measures designed to secure information you provide us from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your information for improper purposes. You understand that internet technologies have the inherent potential for disclosure. You acknowledge that you are under no obligation to provide Personal Data or other sensitive information in order to use the Software and that you provide any such information at your own risk.</p>

                <h4>Disclaimers; No Warranties</h4>

                <p>10.1 The Software and any third-party or User Data, software, services, or applications made available in conjunction with or through the Software is provided “as is” and “as available” without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, Sourcegraph, its suppliers, licensors, and partners disclaim all warranties, statutory, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement of proprietary rights.</p>

                <p>10.2 Sourcegraph, its suppliers, licensors, and partners do not warrant that the functions contained in the Software will be uninterrupted or error-free, that the Software will meet your requirements, that defects will be corrected, or that the Software or the server that makes it available is free of viruses or other harmful components.</p>

                <p>10.3 Sourcegraph, its suppliers, licensors, and partners do not warrant or make any representations regarding the use or the results of the use of the Software in terms of correctness, accuracy, reliability, or otherwise. You understand and agree that you download or otherwise obtain third-party or User Data, material, or data through the use of the Software at your own discretion and risk and that you will be solely responsible for any damage to your computer system or loss of data that results from the download of such third-party or User provided information, material, or data. Sourcegraph will not be responsible or liable for the deletion, correction, destruction, damage, loss, or failure to store or maintain any third-party or User Data.</p>

                <p>10.4 Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you might have additional rights.</p>

                <h4>Limitation of Liability</h4>

                <p>11.1 Under no circumstances, including, but not limited to, negligence, will Sourcegraph or its affiliates, contractors, employees, agents, or third-party partners, licensors, or suppliers be liable for any special, indirect, incidental, consequential, punitive, reliance, or exemplary damages (including without limitation losses or liability resulting from loss of data, loss of revenue, anticipated profits, or loss of business opportunity) that result from your use or your inability to use the information or materials on the Software, or any other interactions with Sourcegraph, even if Sourcegraph or a Sourcegraph authorized representative has been advised of the possibility of such damages. Applicable law may not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you. In such cases, Sourcegraph’s liability will be limited to the fullest extent permitted by applicable law.</p>

                <p>11.2 In no event will Sourcegraph’s or its affiliates’, contractors’, employees’, agents’, or third-party partners’, licensors’, or suppliers’ total liability to you for all damages, losses, and causes of action arising out of or relating to these terms or your use of the Software, including without limitation your interactions with other users, (whether in contract, tort including negligence, warranty, or otherwise) exceed the amount paid by you, if any, for accessing the Software during the twelve (12) months immediately preceding the day the act or omission occurred that gave rise to your claim or one hundred dollars, whichever is greater.</p>

                <p>11.3 You acknowledge and agree that Sourcegraph has offered its products and services, set its prices, and entered into these terms in reliance upon the disclaimers of warranty and the limitations of liability set forth herein, that the disclaimers of warranty and the limitations of liability set forth herein reflect a reasonable and fair allocation of risk between the parties (including the risk that a contract remedy may fail of its essential purpose and cause consequential loss), and that the disclaimers of warranty and the limitations of liability set forth herein form an essential basis of the bargain between you and Sourcegraph.</p>

                <h4>Indemnification</h4>

                <p>You agree to defend, indemnify and hold harmless Sourcegraph and its subsidiaries, agents, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Software, including any data or work transmitted or received by you; (b) your violation of any term of these Terms, including without limitation, your breach of any of the representations and warranties above; (c) your violation of any third-party right, including without limitation any right of privacy, publicity rights or intellectual property rights; (d) your violation of any law, rule or regulation of the United States or any other country; (e) any claim or damages that arise as a result of any of your User Data or any other data that are submitted via your account; or (f) any other party’s access and use of the Software with your unique username, password or other appropriate security code. Sourcegraph will have the right to control the defense, settlement, adjustment or compromise of any such claims, actions or proceedings by using counsel selected by Sourcegraph. Sourcegraph will use reasonable efforts to notify you of any such claims, actions, or proceedings upon becoming aware of the same.</p>

                <h4>Location of the Software; Export Controls</h4>

                <p>The hosted version of the Software is controlled and operated from our facilities in the United States. Sourcegraph makes no representations that the Software is appropriate or available for use in other locations. Those who access or use the Software from other jurisdictions do so at their own volition and are entirely responsible for compliance with local law, including but not limited to export and import regulations. You may not use the Software if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government. Unless otherwise explicitly stated, all materials found on the Software are solely directed to individuals, companies, or other entities located in the U.S. By using the Software, you are consenting to have your personal data transferred to and processed in the United States.</p>

                <p>The Software and the underlying information and technology may not be downloaded or otherwise exported or re-exported (a) into (or to a national or resident of) any country to which the U.S. has embargoed goods; or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Commerce Department’s Table of Deny Orders. By downloading or using the Software, you are agreeing to the foregoing and you represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list and you agree to comply with all export laws and other applicable laws.</p>

                <h4>Governing Law; Arbitration; and Class Action/Jury Trial Waiver</h4>

                <p>14.1 Governing Law. This Agreement shall be governed by the internal substantive laws of the State of California, without respect to its conflict of laws principles. Notwithstanding the preceding sentence with respect to the substantive law, any arbitration conducted pursuant to the terms of these Terms shall be governed by the Federal Arbitration Act (9 U.S.C. §§ 1-16). The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the personal jurisdiction of the federal and state courts located in Santa Clara County, California for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision below, including any provisional relief required to prevent irreparable harm. You agree that Santa Clara County, California is the proper forum for any appeals of an arbitration award or for trial court proceedings if the arbitration provision below is found to be unenforceable.</p>

                <p>14.2 Arbitration. Read this section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you can seek relief from Sourcegraph. For any dispute with Sourcegraph, you agree to first contact us at <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a> and attempt to resolve the dispute with us informally. In the unlikely event that Sourcegraph has not been able to resolve a dispute it has with you after sixty (60) days, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to these Terms, or the breach or alleged breach thereof (collectively, “<b>Claims</b>”), by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. JAMS may be contacted at www.jamsadr.com. The arbitration will be conducted in Santa Clara County, California, unless you and Sourcegraph agree otherwise. If you are using the Software for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys’ fees and reasonable costs for expert and other witnesses. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing Sourcegraph from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, intellectual property or other proprietary rights.</p>

                <p>14.3 Class Action/Jury Trial Waiver. With respect to all persons and entities, regardless of whether they have obtained or used the Software for personal, commercial or other purposes, all claims must be brought in the parties’ individual capacity, and not as a plaintiff or class member in any purported class action, collective action, private attorney general action or other representative proceeding. This waiver applies to class arbitration, and, unless we agree otherwise, the arbitrator may not consolidate more than one person’s claims. You agree that, by entering into these Terms, you and Sourcegraph are each waiving the right to a trial by jury or to participate in a class action, collective action, private attorney general action, or other representative proceeding of any kind.</p>

                <h4>Miscellaneous</h4>

                <p>15.1 Notice and Modifications. Sourcegraph may provide you with notices, including those regarding changes to Sourcegraph’s terms and conditions, by email, regular mail, or postings on the Software. Notice will be deemed given twenty-four hours after email is sent, unless Sourcegraph is notified that the email address is invalid. Alternatively, we may give you legal notice by mail to a postal address, if provided by you through the Software. In such case, notice will be deemed given three days after the date of mailing. Notice posted on the Software is deemed given five (5) days following the initial posting. Sourcegraph reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in these Terms. Sourcegraph is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. Sourcegraph may, in its sole discretion, modify or update these Terms from time to time, and so you should review this page periodically. When we change the Agreement in a material manner, we will update the ‘last modified’ date at the bottom of this page and notify you that material changes have been made to the Agreement. Your continued use of the Software after any such change constitutes your acceptance of the new Terms of Service. If you do not agree to any of these terms or any future Terms of Service, do not use or access (or continue to access) the Software.</p>

                <p>15.2 U.S. Government End Users. The Software was developed by private financing and constitutes a “Commercial Item,” as that term is defined at 48 C.F.R. §2.101. The Software consists of “Commercial Computer Software” and “Commercial Computer Software Documentation,” as such terms are used in 48 C.F.R. §12.212. Consistent with 48 C.F.R. §12.212 and 48 C.F.R. §227.7202-1 through 227.7202-4, all U.S. Government End Users acquire only those rights in the Software and the Documentation that are specifically provided by this Agreement. Consistent with 48 C.F.R. §12.211, all U.S. Government End Users acquire only technical data and the rights in that data customarily as specifically provided in this Agreement.</p>

                <p>15.3 Waiver. The failure of Sourcegraph to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by Sourcegraph.</p>

                <p>15.4 Severability. If any provision of these Terms is held to be unlawful, void, or for any reason unenforceable, then that provision will be limited or eliminated from these Terms to the minimum extent necessary and will not affect the validity and enforceability of any remaining provisions; except that in the event of unenforceability of the universal Class Action/Jury Trial Waiver, the entire arbitration agreement shall be unenforceable.</p>

                <p>15.5 Assignment. These Terms and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Sourcegraph without restriction.</p>

                <p>15.6 Survival. Upon termination of these Terms, any provision which, by its nature or express terms should survive, shall survive such termination or expiration, including, but not limited to, Sections 3 and 8 through 21.</p>

                <p>15.7 Headings. The heading references herein are for convenience only, do not constitute a part of these Terms, and will not be deemed to limit or affect any of the provisions hereof.</p>

                <p>15.8 Entire Agreement. This, including the agreements incorporated by reference, constitutes the entire agreement between you and Sourcegraph relating to the subject matter herein and will not be modified except in writing, signed by both parties, or by a change made by Sourcegraph as set forth in these Terms.</p>

                <p>15.9 Claims. You and Sourcegraph agree that any cause of action arising out of or related to the Software must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.</p>

                <p>15.10 Disclosures. The Software is offered by Sourcegraph, Inc., located at 121 2nd St. San Francisco, CA 94105, and can be reached via email at <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a> or telephone at (650) 318-3480. If you are a California resident, (a) you may have this same information emailed to you by sending a letter to the foregoing address with your email address and a request for this information; and (b) in accordance with Cal. Civ. Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.</p>
			</div>
		</div>
	);
}

export default TermsPage;

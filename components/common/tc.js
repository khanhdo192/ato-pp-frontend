export default function TCDocument() {
  return (
    <div>
      <ol className="list-decimal pl-2 md:pl-9">
        <li>
          (Definition of terms)
          <br />
          Terms used in this General Conditions are defined as follows
          <br />
          <strong>3-D Secure</strong>
          <br />
          An e-commerce authentication protocol that enables the secure
          processing of payment, non-payment and account confirmation card
          transactions.
          <br />
          <strong>3DS Server(3DSS)</strong>
          <br />
          A 3DS Integrator's server or systems that handle online transactions
          and facilitates communication between the 3DS Requestor and the DS.
          <br />
          <strong>ACS</strong>
          <br />
          A component that operates in the Issuer Domain, that verifies whether
          authentication is available for a card number and device type and
          authenticates specific Cardholders.
          <br />
          <strong>EMV®</strong>
          <br />
          EMV® is a registered trademark in the U.S. and other countries and an
          unregistered trademark elsewhere. The EMV trademark is owned by EMVCo,
          LLC.
          <br />
          <strong>EMV 3-D Secure Testing and Approval Process</strong>
          <br /> Acknowledgment by EMVCo that the specified product has
          demonstrated sufficient compliance to the EMV Specifications for its
          stated purpose.
          <br />
          <strong>JCB</strong>
          <br /> JCB Co., Ltd. a corporation organized and existing under the
          laws of Japan and having its principal office at 5-1-22, Minami
          Aoyama, Minato-ku, Tokyo, JCB Co.
          <br />
          <strong>JCB Root Certificate(s)</strong>
          <br /> The J/Secure CA public key signed by its private key in the
          form of a self-signed certificate.
          <br />
          <strong>JCB Program Marks</strong>
          <br /> The JCB logo mark and/or the JCB logotype and/or any other
          trademark or trade name of JCB.
          <br />
          <strong>J/Secure.</strong>
          <br /> JCB's Cardholder authentication program conforming to the EMV®
          3-D Secure Protocol and Core Functions Specification
          <br />
          <strong>J/Secure CA</strong>
          <br /> The acronym for "J/Secure Certificate Authority", meaning a
          certificate authority that exists in interoperability domain and
          issues selected certificates required by J/Secure.
          <br />
          <strong>J/Secure Operator Compliance Test (JSOCT)</strong>
          <br /> A test conducted by Operator for the evaluation by JCB to
          confirm Tester product is compliant with J/Secure Specifications.
          <br />
          <strong>J/Secure Specifications</strong>
          <br /> Any documents designated by JCB as a payment brand manager, and
          other technical information and materials related thereto provided by
          JCB
          <br />
          <strong>J/Secure Test Platform</strong>
          <br /> A remote-access test facility for J/Secure, established by JCB,
          which provides an environment for Tester to test ACS/3DSS for
          compliance with J/Secure Specifications.
          <br />
          <strong>Letter of Compliance (LoC)</strong>
          <br /> A document issued by JCB to Tester in accordance with Article 6
          to recognize that the ACS/3DSS that has been submitted for the
          J/Secure Specifications.
          <br />
          <strong>Operator</strong>
          <br /> A party that provides EMV certified 3-DSecure products to
          Issuer and Acquirers (merchants), which is obliged to receive Operator
          Compliance in advance of their implementation with Issuers and
          Acquirers (merchants). Operator can also include Acquirers or Issuers
          willing to deploy their own EMV certified 3-D Secure products to
          merchants or cardholders. Tester also means an operator of ACS/3DSS
          who applied for the J/Secure Operator Compliance Test.
          <br />
          <strong>Operator Compliance</strong>
          <br /> A certificate as defined in Article 6.1.
          <br />
          <strong>Requirements</strong>
          <br /> Collectively, all the requirements imposed by JCB, including,
          test regulations and test procedures, determined and provided by JCB
          by any method of communication, including e-mail and website.
          <br />
          <strong>Tester</strong>
          <br /> An Operator of ACS/3DSS who applied for the J/Secure Operator
          Compliance Test.
          <br />
          <strong>Test Information</strong>
          <br /> Any data provided by JCB by any method of provision, including
          e-mail and website, to Vendor for the purpose of usage in J/Secure
          Operator Compliance Test(s), including test procedures, test card
          information and merchant information.
          <br />
          <strong>Test Logs</strong>
          <br /> JSON messages recorded in J/Secure Test Platform as the results
          of conducting J/Secure Operator Compliance Test.
          <br />
          <strong>Test Results</strong>
          <br /> Results of each Test Script to be produced after comparing JSON
          messages sent from tested ACS/3DS Server against the specific
          standards defined in the Test Scripts.
          <br />
          <strong>Test Scripts</strong>
          <br /> Test scenarios defining (i) JSON messages sent from/to J/Secure
          Test Platform, and (ii) expected values for validating JSON messages
          sent from tested ACS/3DS Server.
        </li>
        <li>
          (Purpose of these General Conditions)
          <ol className="list-decimal pl-4">
            <li>
              The purpose of this General Conditions is to set forth the terms
              and conditions for the JSOCT and Operator Compliance for ACS/3DSS
              operated by the Tester. JCB reserves the right to amend, modify or
              supplement these General Conditions from time to time. If this
              General Conditions is amended, modified, supplemented, or
              distributed in revised form, the Tester shall comply with such
              amended, modified, supplemented version in its entirety.
            </li>
            <li>
              The procedures and details regarding the conduct of the JSOCT by
              the Tester and the issuance or non-issuance of the LoC by JCB
              shall be subject to the terms, conditions and requirements of
              these General Conditions.
            </li>
            <li>
              When a person performs the procedures on behalf of, and under the
              name of a Tester, such person shall represent that the person has
              the authority to bind the Tester and the Tester’s affiliates to
              these General Conditions.
            </li>
          </ol>
        </li>
        <li>
          (Purpose of the JSOCT)
          <ol className="list-decimal pl-4">
            <li>
              The JSOCT is intended to test whether the ACS/3DSS operated by the
              Tester complies with the J/Secure™ specifications.
            </li>
          </ol>
        </li>
        <li>
          (JSOCT Procedure)
          <ol className="list-decimal pl-4">
            <li>
              The prerequisites for the JSOCT are as follows:
              <p>
                (1) the Tester shall ensure that their ACS/3DSS is certified
                with EMV 3-D Secure Testing and Approval Process.
              </p>
              <p>
                (2) the Tester shall represent that all information submitted in
                applying for the JSOCT, is true and accurate.
              </p>
              <p>
                (3) the Tester shall obtain approval from JCB to conduct the
                JSOCT.
              </p>
            </li>
            <li>
              Testers who wish to obtain the LoC shall test ACS/3DSS using the
              J/Secure Test Platform in accordance with these General Conditions
              and the Requirements.
            </li>
            <li>
              The Tester shall submit the required materials for the JSOCT in
              accordance with the requirements.
            </li>
            <li>
              JCB may cancel the JSOCT without prior notice to the Tester, even
              after the Tester has started conducting the JSOCT.
            </li>
          </ol>
        </li>
        <li>
          (J/Secure Test Platform and Test Information)
          <ol className="list-decimal pl-4">
            <li>
              JCB shall authorize the Tester to use the J/Secure Test Platform
              and the Test Information only for the purpose of conducting the
              JSOCT by confirming the details of the application for the JSOCT
              on the J/Secure Test Platform and by notifying JCB of a user ID
              and a user password. JCB shall grant the Tester a license to use
              the J/Secure Test Platform and the Test Information only for the
              purpose of conducting the JSOCT for a period of time determined by
              JCB.
            </li>
            <li>
              The Tester shall not conduct Test Scripts in any other manner than
              that prescribed by JCB.
            </li>
            <li>
              Tester acknowledges and agrees that JCB makes no warranty of any
              kind with respect to the J/Secure Test Platform and Test
              Information, including, but not limited to, its structure, quality
              or functionality.
            </li>
            <li>
              The Tester shall indemnify JCB if the J/Secure Test Platform is
              damaged, destroyed or disabled as a result of an JSOCT conducted
              by the Tester.
            </li>
            <li>
              When the Tester completes the implementation of such JSOCT, or
              when JCB requests the Tester to discontinue the implementation of
              the JSOCT as provided in Article 4.4, the Tester shall immediately
              discontinue using the J/Secure Test Platform and Test Information.
            </li>
            <li>
              JCB may suspend operation of the J/Secure Test Platform in the
              event of a disaster, maintenance, or other circumstances that JCB
              deems necessary. Tester acknowledges and agrees that JCB shall not
              be liable for any damages arising from the suspension of the
              operation of J/Secure Test Platform.
            </li>
            <li>
              The Tester shall not conduct stress testing using the J/Secure
              Test Platform.
            </li>
            <li>
              The Tester shall be responsible for the management of its user ID
              and user password for J/Secure Test Platform and shall not
              disclose such user ID and user password to any third party.
            </li>
          </ol>
        </li>
        <li>
          (Issuance of LoC and JCB Root Certificate)
          <ol className="list-decimal pl-4">
            <li>
              If JCB analyzes and evaluates the results of the JSOCT and
              determines that the ACS/3DSS conforms to the criteria established
              by JCB, JCB shall issue an certificate acknowledging that the
              ACS/3DSS concerned conforms to the J/Secure specifications (LoC).
              The LoC is valid only for the same ACS/3DSS for which an
              application has been submitted for the JSOCT.
            </li>
            <li>
              JCB agrees to provide the Tester with a JCB Root Certificate for
              the ACS/3DSS for which an LoC has been issued, and the Tester may
              only provide such JCB Root Certificate only to customers who have
              purchased, rented, leased or transferred the ACS/3DSS for which
              the LoC has been issued.
            </li>
          </ol>
        </li>
        <li>
          (Rights and obligations of the Tester)
          <ol className="list-decimal pl-4">
            <li>
              Upon receipt of the LoC from JCB, the Tester shall acquire the
              right to perform the following acts in accordance with these
              General Conditions, the Requirements and the conditions set forth
              in the LoC, provided that the Tester shall keep complete and
              accurate records of the name, contact information, and other
              customer identifiable information of each customer who receives a
              JCB Root Certificate, and provide such information to JCB whenever
              requested by JCB, in compliance with the privacy laws applicable
              to Testers. JCB shall not be liable for any loss or damage arising
              out of the use of such information.:
              <p>
                (1) To publicly announce that the ACS/3DSS for which the LoC has
                been issued conforms to the J/Secure Specifications, and to use
                the JCB logo, trademark or trade name only for the purpose of
                publicity as specified in Article 7.1 (1) hereof. In using the
                logo, JCB shall comply with the requirements of the VI TDesign
                Manual (https://www.jcb.co.jp/bdmanual/en/index.html).
              </p>
              <p>
                (2) Selling, renting, leasing, or transferring to a third party
                the same ACS/3DSS that issued the LoC for the purpose of
                J/Secure transactions.
              </p>
            </li>
            <li>
              If the Tester modifies, alters, etc. the ACS/3DSS for which the
              Tester has received an LoC, the Tester shall undergo
              re-certification by EMVCo if requested by EMVCo prior to reporting
              to JCB. The Tester shall then submit the prescribed report in
              accordance with the requirements of the JCB, and if the JCB
              requires a re-test, the Tester shall apply for another JSOCT.
            </li>
            <li>
              JCB shall have the right to change the conditions for the JSOCT or
              the issuance of the LoC at its own discretion. Upon request by
              JCB, the Tester shall re-test the ACS/3DSS in accordance with the
              changed conditions without delay.
            </li>
            <li>
              If JCB notifies the Tester of the need for re-testing, such LoC
              shall cease to be valid unless otherwise approved by JCB in
              writing.
            </li>
            <li>
              The Tester shall immediately notify JCB of any expiration of the
              EMVCo approval on EMV 3-D Secure Testing and Approval Process
              after applying for a JSOCT.
            </li>
            <li>
              In the event of any change in the information contained in the
              application for Operator Compliance, the Tester shall submit the
              prescribed change application to JCB in accordance with the
              requirements.
            </li>
            <li>
              The Tester shall not assign, sell, pledge, hypothecate or
              otherwise transfer any of its rights or obligations under these
              General Conditions without the prior written consent of JCB.
            </li>
          </ol>
        </li>
        <li>
          (Fees)
          <ol className="list-decimal pl-4">
            <li>
              The Tester shall pay to JCB the amount indicated in a document on
              the J/Secure Test Platform as the fee for the JSOCT for each
              ACS/3DSS to be tested by way of wire transfer to a bank account
              designated by JCB by the date specified by JCB. The Tester shall
              bear the cost of such transfer and any other costs required for
              the payment, including consumption tax.
            </li>
            <li>
              The fees set forth in Article 8.1 shall not include any fees and
              expenses arising from additional JSOCTs required in the event that
              ACS/3DSS fails the JSOCT for any reason. If JCB determines that an
              additional JSOCT is necessary, the Tester shall pay to JCB an
              amount separately determined by JCB as fees and expenses for such
              test, on the same terms and conditions as set forth in Article
              8.1.
            </li>
            <li>
              The fees set forth in Article 8.1 shall not include any fees or
              expenses incurred in the event that JCB determines that a re-test
              is necessary as provided in Article 7.2 or Article 7.3. If JCB
              determines that a re-test is necessary, the Tester shall pay to
              JCB the fees and expenses for such re-test under the same
              conditions and in an amount separately determined by JCB.
            </li>
            <li>
              JCB shall not be required to refund any fees or expenses received
              from the Seller set forth in Article 8, Paragraphs 1 through 3 for
              any reason whatsoever.
            </li>
          </ol>
        </li>
        <li>
          (Warranty and Disclaimer, etc.)
          <ol className="list-decimal pl-4">
            <li>
              The Tester acknowledges that even if the Tester has obtained an
              LoC issued by JCB, JCB does not guarantee the integrity of the
              compliance process or the functionality, quality or performance of
              any particular product, and makes no warranties regarding the
              ACS/3DSS, including, but not limited to, the following:
            </li>
            <p>
              (1) that ACS/3DSS other than ACS/3DSS submitted by the Tester for
              the JSOCT meets the standards set by JCB.
            </p>
            <p>
              (2) that the product in question generally has the quality and
              functionality of J/Secure's ACS/3DSS.
            </p>
            <p>
              (3) that the product in question does not infringe the patent,
              copyright, or other intellectual property rights of any third
              party.
            </p>
            <li>
              The Tester shall be solely responsible for the ACS/3DSS for which
              JCB has issued the LoC, and JCB shall not be liable for any claims
              against the Tester, its officers, employees, customers, suppliers
              or third parties from such ACS/3DSS, customers, suppliers or third
              parties, regardless of the reason thereof.
            </li>
            <li>
              Tester acknowledges that JCB makes no warranty for the services
              provided to any third party by Tester, including, but not limited
              to, JSOCT or J/Secure Test Platform.
            </li>
            <li>
              Tester agrees to indemnify and hold harmless JCB from and against
              any and all damages, including claims, demands, losses,
              liabilities or expenses incurred by JCB arising out of or in
              connection with the ACS/3DSS, the JSOCT, the LoC, these General
              Conditions and matters related thereto, respectively.
            </li>
            <li>
              The Tester acknowledges that JCB will rely entirely on the
              Tester's J/Secure Test Platform user ID and user password for
              identification of the Tester in the JSOCT, and that JCB shall not
              be liable to the Tester or any third party for any misuse,
              infringement or illegal use of such user ID and user password by
              the Tester.
            </li>
          </ol>
        </li>
        <li>
          (Compensation for damages)
          <ol className="list-decimal pl-4">
            <li>
              JCB's liability to the Tester shall be limited to damages for
              failure to perform its obligations under these General Conditions,
              up to the amount of such fees paid by the Tester to JCB for such
              JSOCT under Article 8.
            </li>
            <li>
              JCB's liability for damages as provided in Article 10.1 shall not
              include the following damages
              <p>
                (1) Any consequential damages, including, but not limited to,
                loss of business, revenue, goodwill, and anticipated savings.
              </p>
              <p>
                (2) Damages caused by any cause beyond the reasonable control of
                JCB, including, but not limited to, acts of God, acts of any
                government or governmental authority, compliance with any law,
                regulation, order or economic sanction, fire, storm, flood or
                earthquake, war (whether declared or not), insurrection,
                revolution or riot.
              </p>
              <p>
                (3) Damages due to causes attributable to the Tester, its
                officers, employees or affiliates.
              </p>
              <p>
                (4) Any direct or indirect damages suffered by the Tester, its
                officers, employees, customers, business partners, or third
                parties in connection with the use or the results of the use of
                the J/Secure Test Platform or Test Information.
              </p>
              <p>
                (5) Damages due to JCB's dismissal of the Tester's application
                for operator compliance and the cancellation of the JSOCT.
              </p>
            </li>
            <li>
              Except as provided in Paragraphs 1 and 2 of Article 10, JCB shall
              in no event be liable to the Tester for any loss or damage in
              connection with the JSOCT, the issuance of the LoC by JCB, or any
              matter related thereto.
            </li>
          </ol>
        </li>
        <li>
          (Intellectual Property Rights)
          <ol className="list-decimal pl-4">
            <li>
              Except for the Tester’s right to use the JCB logo, trademark or
              trade name pursuant to Article 7.1 (1), the Tester shall not use
              the JCB Program Marks and/or the JCB Intellectual Property Rights.
              Upon termination of the LoC received by the Tester, the Tester's
              right to use the JCB logo, trademark or trade name pursuant to
              Article 7.1 shall cease to be effective.
            </li>
            <li>
              If JCB issues an LoC to a Tester, JCB shall be entitled to use the
              Tester’s logo, trademark or trade name, and to publish the name of
              the Tester, the name of ACS/3DSS or any other relevant information
              determined by the JCB in a manner determined by the JCB
              (including, but not limited to, posting on the website). Upon
              termination of all LoC received by the Tester, the right of JCB to
              use the Tester’s logo, trademark or trade name under this Article
              2 shall cease to be effective.
            </li>
            <li>
              If JCB issues an LoC to a Tester, JCB shall have the right to use
              the Tester’s Test Logs with ACS/3DSS for the purpose of ensuring
              stable operation of J/Secure.
            </li>
          </ol>
        </li>
        <li>
          (Confidentiality)
          <ol className="list-decimal pl-4">
            <li>
              “Confidential Information" under these General Conditions means
              any information including:
              <p>
                (1) which JCB designates as confidential and discloses in
                tangible media (including electronic media such as e-mail,
                magnetic media, and websites) such as technical data, drawings,
                and other related documents.
              </p>
              <p>
                (2) which is orally disclosed with such confidentiality notice
                and subsequently designated as confidential in writing by the
                disclosing party within 14 days of such disclosure.
              </p>
            </li>
            <li>
              In connection with Article 12.1, the following items shall be
              deemed Confidential Information disclosed by the JCB to the
              Tester, and the Tester shall comply with and abide by all
              obligations under Article 12.
              <p>
                (1) All information submitted to the J/Secure Test Platform,
                including, but not limited to, Test Scripts and Test
                Information.
              </p>
              <p>
                (2) Information displayed in J/Secure Test Platform as a result
                of ACS/3DSS testing, including, but not limited to, test results
                and test logs.
              </p>
            </li>
            <li>
              Neither party shall disclose or divulge Confidential Information
              to any third party without the prior written consent of the
              disclosing party (“Disclosing Party”). However, this shall not
              apply in any of the following cases
              <p>
                (1) Such information will already be public knowledge at the
                time the other party (the "Receiving Party"; if the JCB receives
                Confidential Information, the JCB shall be deemed to be the
                Receiving Party with respect to such information) receives such
                information from the Disclosing Party.
              </p>
              <p>
                (2) Such information will be made available for public
                inspection for reasons not attributable to the Receiving Party
                after the Receiving Party receives such information from the
                Disclosing Party.
              </p>
              <p>
                (3) The Receiving Party already had the information when it
                received it from the Disclosing Party.
              </p>
              <p>
                (4) The Receiving Party will learn such information from a duly
                authorized third party without any obligation of
                confidentiality.
              </p>
            </li>
            <li>
              The Parties shall manage the Confidential Information with the
              care of a good manager in order to comply with the confidentiality
              obligations set forth in this Article.
            </li>
            <li>
              The Parties may disclose such Confidential Information only to
              their own officers and employees who have a need to know such
              Confidential Information, and such officers and employees shall be
              subject to the confidentiality obligations set forth herein.
            </li>
            <li>
              The Parties shall take measures to ensure that officers and
              employees to whom Confidential Information is disclosed maintain
              the confidentiality obligations set forth in this General
              Conditions even after they leave the Party.
            </li>
            <li>
              Neither party may reproduce Confidential Information without the
              written consent of the other party. If either party reproduces
              Confidential Information in accordance with Section 7 of this
              Article, such party shall indicate the copyright in such
              Confidential Information on such reproduction.
            </li>
            <li>
              Both parties shall immediately return or dispose of the
              Confidential Information and any copies thereof upon request by
              the other party. If a party disposes of such information and any
              copies thereof, it shall notify the other party to that effect.
            </li>
          </ol>
        </li>
        <li>
          (Termination/Release of LoC)
          <ol className="list-decimal pl-4">
            <li>
              If the Tester violates any of these General Conditions or any
              requirement, JCB may terminate the LoC issued to the Tester, in
              whole or in part, by giving notice to the Tester.
            </li>
            <li>
              If EMVCo revokes EMVCo accreditation (EMV 3-D Secure Testing and
              Approval Process) by EMVCo, Tester shall immediately notify JCB of
              such revocation and JCB's LoC shall automatically cease to be
              effective.
            </li>
            <li>
              If the Tester undergoes revision, amendment or other changes to
              the ACS/3DSS for which an LoC has been issued and JCB notifies the
              Tester of the need for re-testing, such LoC shall cease to be
              valid.
            </li>
            <li>
              If the LoC ceases to be valid, the Tester shall automatically
              forfeit the rights provided for in Article 7.1.
            </li>
            <li>
              If the LoC ceases to be valid, the Tester shall return the LoC to
              JCB or dispose of it in accordance with JCB's instructions, and
              the Tester shall not use such JCB Root Certificate for its own use
              or provide it to any third party. If the Tester disposes of the
              LoC in accordance with JCB's instructions, the Tester shall notify
              JCB thereof immediately after completing the disposal of such LoC.
            </li>
          </ol>
        </li>
        <li>
          (Exclusion of Anti-Social Forces)
          <ol className="list-decimal pl-4">
            <li>
              The Tester represents, warrants, and covenants to JCB that the
              Tester and the directors do not, and will not in the future, fall
              into any of (a) a crime syndicate, (b) crime syndicate members or
              former members for whom five (5) years have not yet passed since
              leaving a crime syndicate, (c) crime syndicate quasi-members, (d)
              crime syndicate related companies, (e) a corporate racketeers, (f)
              forces disguising themselves as social or political movements, (g)
              special intellectual violent organizations, (h) terrorists, (i) a
              person who is designated by Japanese or foreign government as
              subject to economic sanctions (the above (a) through (i) are
              collectively referred to as “Crime Syndicate Members etc.”), (j) a
              person who is deemed to have a symbiotic relationship with the
              Crime Syndicate Members etc., or (k) any other person equivalent
              to any of the above items (the above (a) through (k) are
              collectively referred to as “Anti-Social Forces”).
            </li>
            <li>
              If a person falls into any of the followings, the person is deemed
              to have a symbiotic relationship with the Crime Syndicate Members
              etc.
              <p>
                (1) A person whose management is controlled by a Crime Syndicate
                Members etc.
              </p>
              <p>
                (2) A person whose management is substantially involved by a
                Crime Syndicate Members etc.
              </p>
              <p>
                (3) A person who wrongfully uses a Crime Syndicate Members etc.,
                for the purpose to make unjust benefits of his/her own or a
                third party or to inflict any damage on a third party.
              </p>
              <p>
                (4) A person who provides funds or other benefits to, or
                otherwise is involved in any activity of, a Crime Syndicate
                Members etc.
              </p>
              <p>
                (5) A person who has a socially blamable relationship with a
                Crime Syndicate Members etc., including a company or an
                organization whose director or other person substantially
                participating in management has the same relationship with a
                Crime Syndicate Members etc.
              </p>
              <p>
                (6) A person who intends to expand his/her own benefits by
                embracing an opportunity of fund-raising activities made by a
                Crime Syndicate Members etc., or otherwise by using the forces,
                information power, or funding power of a Crime Syndicate Members
                etc.
              </p>
            </li>
            <li>
              The Tester covenants to JCB that it will not do, or cause any
              third party to do, any of the following acts:
              <p>(1) Violent demand</p>
              <p>(2) Undue demand beyond legal responsibilities</p>
              <p>
                (3) Threatening behavior or using violent force regarding
                transactions
              </p>
              <p>
                (4) Damaging JCB’s credit or obstructing JCB’s business by
                spreading false rumors or by the use of fraudulent means or
                forces.
              </p>
              <p>(5) Any other act equivalent to any of the previous items.</p>
            </li>
            <li>
              The Tester represents and warrants to JCB that, to the actual
              knowledge of the Tester, their advisers or employees (collectively
              referred to as “Employees etc.”) do not fall into a Crime
              Syndicate Members etc. as for now. The Tester covenants to JCB
              that, if any of their Employees etc., or directors turns out to be
              an Anti-Social Forces or commits any acts set forth under the
              preceding paragraph, the Tester will make endeavors to immediately
              terminate an employment, advisory or mandatory contract made with
              the said Employees etc., or the director.
            </li>
            <li>
              If JCB finds that the Tester has any transactional relationship
              with an Anti-Social Forces, JCB is entitled to request the Tester
              to immediately take a necessary step to cancel, terminate or
              withdraw all transactional relations which the Tester has with an
              Anti-social Forces. The Tester covenants to JCB that, unless there
              is a justifiable ground, the Tester shall make an effort to
              cancel, terminate or withdraw all transactional relations with an
              Anti-social Forces if requested by JCB to do so pursuant to this
              paragraph.
            </li>
            <li>
              JCB may immediately terminate these General Conditions regarding
              all transactions with the Tester without any demand to such
              parties if (i) any representation, warranty or covenant made by
              the Tester under the above paragraph 1 turns out to be untrue or
              false, or (ii) the Tester breaches any of its obligations set
              forth in the above paragraph 3 through paragraph 5.
            </li>
            <li>
              JCB shall be in no event liable or responsible for any damage,
              loss or expense incurred by the Tester due to termination of these
              General Conditions by JCB pursuant to the preceding paragraph.
              Further, the JCB shall be entitled to request the Tester to pay
              for any and all damages, losses and expenses incurred by JCB due
              to termination of these General Conditions by JCB pursuant to the
              preceding paragraph.
            </li>
            <li>
              This Article shall survive termination of these General Conditions
              and continue to be effective until the date on which all
              agreements made between the Tester hereto terminate.
            </li>
          </ol>
        </li>
        <li>
          (Governing law and dispute resolution)
          <ol className="list-decimal pl-4">
            <li>
              These General Conditions shall be governed by and construed in
              accordance with the laws of Japan. The Tokyo District Court shall
              have exclusive jurisdiction in the first instance over any dispute
              or controversy arising out of or relating to these General
              Conditions or the LoC.
            </li>
          </ol>
        </li>
        <li>
          (Other)
          <ol className="list-decimal pl-4">
            <li>
              The provisions of Articles 5.4, 5.6, 8, 9.2, 9.3, 9.4, 10, 12,
              14.7 and 15 shall remain in force even if any of the LoC ceases to
              be valid.
            </li>
            <li>
              If any provision of this General Conditions, or portions thereof,
              are held to be unenforceable or invalid by a court of competent
              jurisdiction, the validity and enforceability of the remaining
              provisions or portions shall not be affected thereby.
            </li>
            <li>
              All notices required or permitted to be given under this General
              Conditions shall be in writing, in English, and shall be sent to
              the e-mail address or addresses submitted on the J/Secure Test
              Platform.
            </li>
          </ol>
        </li>
        <li>
          (Collection, retention, use and deposit of Tester information)
          <ol className="list-decimal pl-4">
            <li>
              Tester agrees that JCB may use Tester information related to the
              use of the J/Secure Test Platform and obtaining Operator
              compliance for the following purposes, in compliance with the
              Personal Information Protection Law of Japan and with the
              necessary protection measures.
              <p>
                (1) To collect and use the following Tester information{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  1
                </span>
                ,{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  2
                </span>
                ,{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  3
                </span>
                ,{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  4
                </span>
                ,{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  5
                </span>
                ,{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  6
                </span>
                , and{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  7
                </span>{' '}
                for the JSOCT, including these General Conditions, and for
                management after operator compliance.
              </p>
              <ol className="pl-4">
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    1
                  </span>{' '}
                  Company Name
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    2
                  </span>{' '}
                  Company Address
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    3
                  </span>{' '}
                  Representative
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    4
                  </span>{' '}
                  Full Name (Applicant Information)
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    5
                  </span>{' '}
                  E-mail
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    6
                  </span>{' '}
                  Phone
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    7
                  </span>{' '}
                  Other Application Information
                </li>
              </ol>
              <p>
                (2) To use the Tester information described in the preceding
                items{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  1
                </span>{' '}
                through{' '}
                <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium">
                  7
                </span>{' '}
                for the following purposes
              </p>
              <ol className="pl-4">
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    1
                  </span>{' '}
                  To be used to promote the implementation of J/Secure or to
                  provide information regarding the business of JCB and Tester,
                  such as posting on the JCB website
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    2
                  </span>{' '}
                  To be used for confirming and communicating business
                  requirements.
                </li>
                <li>
                  <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                    3
                  </span>{' '}
                  To be used as statistical data, etc.
                </li>
              </ol>
            </li>
            <li>
              When JCB entrusts the system and operations of J/Secure Test
              Platform to a third party, JCB may entrust personal information to
              such third party for a certain period of time to the extent
              necessary for the performance of the business.
            </li>
          </ol>
        </li>
        <li>
          (Specification disclosure)
          <ol className="list-decimal pl-4">
            <li>
              Tester agrees to the following terms and conditions regarding the
              handling of J/Secure Specifications.
            </li>
            <ol>
              <li>
                (1) The copyright and all intellectual property rights to the
                J/Secure Specifications shall belong to JCB.
              </li>
              <li>
                (2) JCB grants to the Tester a non-exclusive license to use the
                J/Secure Specifications solely for the purpose of developing,
                manufacturing and selling the deliverables that the Tester
                designs and develops based on the J/Secure Specifications
                ("Tester's Deliverables"). The Tester shall not modify, change
                or alter the J/Secure Specifications.
              </li>
              <li>
                (3) The Tester shall not license, sublicense, transfer, encumber
                or otherwise dispose of the copyright in the J/Secure
                Specifications in whole or in part, except as expressly
                permitted by JCB in these General Conditions.
              </li>
              <li>
                (4) The Tester may disclose the J/Secure Specifications to the
                parent company of the Tester and to the officers and employees
                of the subsidiaries of the Tester to the minimum extent
                necessary.
              </li>
              <li>
                (5) In the event that the Tester entrusts development, the
                Tester shall be entitled to disclose the J/Secure Specifications
                to the minimum extent necessary to the directors and employees
                of the development contractor (hereinafter referred to as
                "Tester’s Contractor") and the development contractor with whom
                the Tester has negotiated (hereinafter referred to as "Tester's
                Negotiating Party"). The Tester may also sublicense the J/Secure
                Specifications to the Tester's Subcontractor only within the
                scope of the subcontracted work.
              </li>
              <li>
                (6) The disclosure or sublicensing by the Tester of the J/Secure
                Specifications pursuant to Paragraphs 4 and 5 of this Article
                shall satisfy all of the following items.
                <ol className="pl-4">
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      1
                    </span>{' '}
                    J/Secure Specifications disclosed by the Tester shall not be
                    modified, changed or altered.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      2
                    </span>{' '}
                    J/Secure Specifications to be disclosed by the Tester shall
                    bear JCB's copyright notice.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      3
                    </span>{' '}
                    The Tester shall assume the same obligations of
                    confidentiality to the disclosees as the Tester assumes
                    under these General Conditions, and the Tester shall assume
                    all responsibilities for any leakage of the J/Secure
                    Specifications by the disclosees.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      4
                    </span>{' '}
                    The disclosees shall indemnify and hold JCB harmless with
                    respect to the matters set forth in Paragraph 4 of this
                    Article 18.1.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      5
                    </span>{' '}
                    The disclosees shall not license or sublicense, assign,
                    rent, or transfer possession of the J/Secure Specifications
                    to any third party.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      6
                    </span>{' '}
                    The Tester shall promptly collect the J/Secure
                    Specifications from the Tester's Contractor or the Tester's
                    Negotiation Partner after the completion of the development
                    contract or the completion of the contract negotiation.
                  </li>
                </ol>
              </li>
              <li>
                (7) The Tester agrees to the following items in the disclaimer
                of J/Secure Specifications disclosed by JCB.
                <ol className="pl-4">
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      1
                    </span>{' '}
                    The Tester understands and agrees that these J/Secure
                    Specifications are disclosed on condition that the Tester
                    assumes responsibility for these J/Secure Specifications.
                    JCB does not warrant, expressly or impliedly, that these
                    J/Secure Specifications or any product based thereon will
                    not infringe the rights of any third party, that the product
                    is of general quality as a product, that the product is fit
                    for a particular purpose, that the product is of good
                    quality or in any other respect.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      2
                    </span>{' '}
                    Under no circumstances shall JCB be responsible for
                    maintaining, modifying, upgrading, updating, etc. the
                    J/Secure Specifications.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      3
                    </span>{' '}
                    JCB shall not be liable to the Tester or any third party for
                    any direct or indirect damages (including claims by third
                    parties) arising out of or in connection with the use of or
                    inability to use these J/Secure Specifications, regardless
                    of whether JCB has been advised by the Tester of the
                    possibility of such damages.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      4
                    </span>{' '}
                    The Tester shall not sell or use after the termination of
                    this General Conditions any Tester Deliverables or
                    work-in-progress thereof held by the Tester in inventory at
                    the time of termination of this General Conditions, in the
                    event these General Conditions are terminated for any
                    reason.
                  </li>
                </ol>
              </li>
              <li>
                (8) The Tester agrees to the following items regarding export
                control of J/Secure Specifications disclosed by JCB.
                <ol className="pl-4">
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      1
                    </span>{' '}
                    The Tester shall not develop, design, manufacture, store,
                    lease, transfer, or license, in whole or in part, nuclear,
                    chemical, or biological weapons, missiles to deliver such
                    weapons, or other weapons of mass destruction or
                    conventional weapons, and shall not use or allow any third
                    party to use the technical information for such purposes.
                  </li>
                  <li>
                    <span className="inline-flex justify-center items-center rounded-full w-4.5 h-4.5 text-sm border border-gray-500 font-medium mr-2">
                      2
                    </span>{' '}
                    If the Tester intends to directly or indirectly handle all
                    or part of the technical information as described below, the
                    Tester shall take the necessary procedures after confirming
                    the regulations under the Foreign Exchange and Foreign Trade
                    Law and foreign export control laws and regulations such as
                    the Export Administration Regulations of the United States
                    of America.
                    <ol className="list-character pl-8" type="i">
                      <li>When exporting from Japan</li>
                      <li>
                        When taking out of the country where the Tester is
                        located to a third country
                      </li>
                      <li>
                        When providing or allowing to be used by residents
                      </li>
                      <li>
                        In addition to the preceding three items, as stipulated
                        in the "Foreign Exchange and Foreign Trade Law" or
                        foreign export-related laws and regulations
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </ol>
        </li>
      </ol>
    </div>
  );
}

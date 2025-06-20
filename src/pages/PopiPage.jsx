import React from "react";
import Layout from "../layout/Layout";

const PopiPage = () => {
  return (

    <Layout>


    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            POPI & PAIA Manual
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            Save Wise & PAIA Manual
          </h2>
        </div>

        {/* Introduction */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Introduction
          </h3>
          <p className="text-gray-700 mb-4">
            The basis of the POPI Act is that organizations need to conduct
            themselves responsibly - responsible corporate citizenship.
            Organizations should not only be responsible but should be seen to be
            responsible corporate citizens. Part of this responsibility is to
            protect the information inside the organization, to be responsible
            when it comes to the process of storing and sharing personal
            information.
          </p>
          <p className="text-gray-700">
            Save Wise uses and maintains its data responsibly. Our full POPI
            manual is listed below, and our complaints line and opt-out features
            are readily available.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-indigo-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Table of Contents
          </h3>
          <ul className="space-y-2">
            {[
              "Introduction",
              "Availability of Manual",
              "Contact Details",
              "Guide of The South African Human Rights Commission",
              "Information Regulator",
              "Notice ito Section 52(2) of PAIA",
              "Records Available in accordance with Legislation",
              "Records Available with a Request to Access",
              "How to Request Access to a Record",
              "Prescribed Fees",
              "Refusal of a Request to Access Records",
              "Remedies Available when a Request is Refused",
              "Processing of Personal Information",
              "Purpose of Processing Personal Information",
              "Categories of Personal Information",
              "Sharing of Personal Information",
              "Transborder Flows of Personal Information",
              "Security of Personal Information",
              "Annexures",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Save Wise:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Physical Address:</span>
                  <span className="text-gray-700">
                    V&A Waterfront, Cape Town, 8001
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Postal Address:</span>
                  <span className="text-gray-700">
                    V&A Waterfront, Cape Town, 8001
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Website:</span>
                  <span className="text-indigo-600 hover:underline">
                    <a href="http://www.savewise.co.za">
                      www.savewise.co.za
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Call:</span>
                  <span className="text-gray-700">+27 51 140 0150</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Information Officer:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Name:</span>
                  <span className="text-gray-700">[Name]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Call:</span>
                  <span className="text-gray-700">+27 51 140 0150</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 w-32">Email:</span>
                  <span className="text-indigo-600 hover:underline">
                    <a href="mailto:info@savewise.co.za">
                      info@savewise.co.za
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Records Available */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Records Available with a Request to Access
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Personnel records:",
                items: [
                  "Information provided by personnel",
                  "Information provided by third parties relating to personnel",
                  "Conditions of employment",
                  "Internal evaluation records",
                  "Correspondence",
                  "Training schedules and material",
                  "Other personnel and consultant-related records",
                ],
              },
              {
                title: "Contractor / consultant records:",
                items: [
                  "Information provided by contractors / consultants",
                  "Information provided by third parties relating to contractors / consultants",
                  "Conditions of service level agreements with contractors / consultants",
                  "Internal evaluation records",
                  "Correspondence",
                  "Other contractor/consultant-related records",
                ],
              },
              {
                title: "Client records:",
                items: [
                  "Records provided by a client",
                  "Records provided by a third party related to a client",
                  "Records generated within Save Wise related to a client",
                  "Records generated within Save Wise in execution of Save Wise's contract with their clients",
                  "Other client-related records",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {section.title}
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to Request Access */}
        <div className="bg-indigo-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            How to Request Access to a Record
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Records held by us may be accessed by requests only once the
              prerequisite requirements for access have been met. A requester is
              any person making a request for access to a record. There are two
              types of requesters:
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-600 mb-2">
                Personal Requester:
              </h4>
              <p>
                a requester who is seeking access to a record containing
                personal information about the requester. We will voluntarily
                provide the requested information or give access to any record
                with regard to the requester's personal information. We will not
                charge a request fee; however, the prescribed fee for
                reproduction of the information requested will be charged.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-600 mb-2">
                Other Requester:
              </h4>
              <p>
                This requester (other than a personal requester) is entitled to
                request access to information on third parties. The requester
                must comply with all the procedural requirements contained in
                PAIA relating to the request for access to a record. In
                considering such a request, we will adhere to the provisions of
                PAIA and the Information Officer will take all reasonable steps
                to inform a third party to whom the requested record relates of
                the request, informing the third party that he/she may make a
                written or oral representation to the Information Officer why the
                request should be refused or, where required, give written
                consent for the disclosure of the Information. We are not
                obliged to voluntarily grant access to such records. The
                requester must fulfill the prerequisite requirements as stated
                herein. The prescribed fees will be charged.
              </p>
            </div>
          </div>
        </div>

        {/* Prescribed Fees */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Prescribed Fees
          </h3>
          <p className="text-gray-700 mb-4">
            Requesters are required to pay a fee for requesting access to
            records as well as for accessing records. The prescribed fees are as
            follows:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fee (ZAR)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { service: "Requesting access to a record*", fee: "R50.00" },
                  { service: "Copy per A4 page", fee: "R1.10" },
                  { service: "Printing per A4 page", fee: "R0.70" },
                  { service: "Copy on a CD", fee: "R70.00" },
                  {
                    service: "Transcript of visual images per A4 page",
                    fee: "R40.00",
                  },
                  { service: "Copy of a visual image", fee: "R60.00" },
                  {
                    service: "Transcription of an audio recording per A4 page",
                    fee: "R20.00",
                  },
                  { service: "Copy of an audio recording", fee: "R30.00" },
                  {
                    service:
                      "Search & preparation of the record for disclosure, per hour or part thereof (excluding the first hour)",
                    fee: "R30.00",
                  },
                  { service: "Actual postage fee", fee: "Actual cost" },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Requesters who are requesting access to their personal information
            and requesters earning less than R14,712 (if single) and R27,192 per
            annum (if married or have a life partner) are exempt from paying a
            request fee
          </p>
        </div>

     
      </div>
    </div>
    </Layout>
  );
};

export default PopiPage;
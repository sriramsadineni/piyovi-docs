import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/piyovi-apis",
    },
    {
      type: "category",
      label: "Account",
      items: [
        {
          type: "doc",
          id: "api/generate-a-token",
          label: "Generate a token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Address Validation",
      items: [
        {
          type: "doc",
          id: "api/valdiate-address",
          label: "Valdiate address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Rate shop",
      items: [
        {
          type: "doc",
          id: "api/get-rates",
          label: "Get rates",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Shipment",
      items: [
        {
          type: "doc",
          id: "api/create-a-shipment",
          label: "Create a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cancel-a-shipment",
          label: "Cancel a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-a-shipment",
          label: "Update a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/track-a-shipment",
          label: "Track a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/block-a-shipment",
          label: "Block a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/unblock-a-shipment",
          label: "Unblock a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/archive-a-shipment",
          label: "Archive a shipment",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Third Party Shipment",
      items: [
        {
          type: "doc",
          id: "api/create-a-shipment",
          label: "Create a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-a-shipment",
          label: "Update a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/track-a-shipment",
          label: "Track a shipment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

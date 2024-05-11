import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/1.0.0/piyovi-apis",
    },
    {
      type: "category",
      label: "Account",
      items: [
        {
          type: "doc",
          id: "api/1.0.0/generate-a-token",
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
          id: "api/1.0.0/valdiate-address",
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
          id: "api/1.0.0/get-rates",
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
          id: "api/1.0.0/create-a-shipment",
          label: "Create a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/1.0.0/cancel-a-shipment",
          label: "Cancel a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/1.0.0/update-a-shipment",
          label: "Update a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/1.0.0/track-a-shipment",
          label: "Track a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/1.0.0/block-a-shipment",
          label: "Block a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/1.0.0/unblock-a-shipment",
          label: "Unblock a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/1.0.0/archive-a-shipment",
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
          id: "api/1.0.0/create-a-shipment",
          label: "Create a shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/1.0.0/update-a-shipment",
          label: "Update a shipment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/1.0.0/track-a-shipment",
          label: "Track a shipment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

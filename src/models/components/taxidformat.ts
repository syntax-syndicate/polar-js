/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * List of supported tax ID formats.
 *
 * @remarks
 *
 * Ref: https://docs.stripe.com/billing/customer/tax-ids#supported-tax-id
 */
export const TaxIDFormat = {
  AdNrt: "ad_nrt",
  AeTrn: "ae_trn",
  ArCuit: "ar_cuit",
  AuAbn: "au_abn",
  AuArn: "au_arn",
  BgUic: "bg_uic",
  BhVat: "bh_vat",
  BoTin: "bo_tin",
  BrCnpj: "br_cnpj",
  BrCpf: "br_cpf",
  CaBn: "ca_bn",
  CaGstHst: "ca_gst_hst",
  CaPstBc: "ca_pst_bc",
  CaPstMb: "ca_pst_mb",
  CaPstSk: "ca_pst_sk",
  CaQst: "ca_qst",
  ChUid: "ch_uid",
  ChVat: "ch_vat",
  ClTin: "cl_tin",
  CnTin: "cn_tin",
  CoNit: "co_nit",
  CrTin: "cr_tin",
  DeStn: "de_stn",
  DoRcn: "do_rcn",
  EcRuc: "ec_ruc",
  EgTin: "eg_tin",
  EsCif: "es_cif",
  EuOssVat: "eu_oss_vat",
  EuVat: "eu_vat",
  GbVat: "gb_vat",
  GeVat: "ge_vat",
  HkBr: "hk_br",
  HrOib: "hr_oib",
  HuTin: "hu_tin",
  IdNpwp: "id_npwp",
  IlVat: "il_vat",
  InGst: "in_gst",
  IsVat: "is_vat",
  JpCn: "jp_cn",
  JpRn: "jp_rn",
  JpTrn: "jp_trn",
  KePin: "ke_pin",
  KrBrn: "kr_brn",
  KzBin: "kz_bin",
  LiUid: "li_uid",
  MxRfc: "mx_rfc",
  MyFrp: "my_frp",
  MyItn: "my_itn",
  MySst: "my_sst",
  NgTin: "ng_tin",
  NoVat: "no_vat",
  NoVoec: "no_voec",
  NzGst: "nz_gst",
  OmVat: "om_vat",
  PeRuc: "pe_ruc",
  PhTin: "ph_tin",
  RoTin: "ro_tin",
  RsPib: "rs_pib",
  RuInn: "ru_inn",
  RuKpp: "ru_kpp",
  SaVat: "sa_vat",
  SgGst: "sg_gst",
  SgUen: "sg_uen",
  SiTin: "si_tin",
  SvNit: "sv_nit",
  ThVat: "th_vat",
  TrTin: "tr_tin",
  TwVat: "tw_vat",
  UaVat: "ua_vat",
  UsEin: "us_ein",
  UyRuc: "uy_ruc",
  VeRif: "ve_rif",
  VnTin: "vn_tin",
  ZaVat: "za_vat",
} as const;
/**
 * List of supported tax ID formats.
 *
 * @remarks
 *
 * Ref: https://docs.stripe.com/billing/customer/tax-ids#supported-tax-id
 */
export type TaxIDFormat = ClosedEnum<typeof TaxIDFormat>;

/** @internal */
export const TaxIDFormat$inboundSchema: z.ZodNativeEnum<typeof TaxIDFormat> = z
  .nativeEnum(TaxIDFormat);

/** @internal */
export const TaxIDFormat$outboundSchema: z.ZodNativeEnum<typeof TaxIDFormat> =
  TaxIDFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxIDFormat$ {
  /** @deprecated use `TaxIDFormat$inboundSchema` instead. */
  export const inboundSchema = TaxIDFormat$inboundSchema;
  /** @deprecated use `TaxIDFormat$outboundSchema` instead. */
  export const outboundSchema = TaxIDFormat$outboundSchema;
}

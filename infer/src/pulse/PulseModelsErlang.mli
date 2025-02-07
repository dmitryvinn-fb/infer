(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open! IStd
open PulseModelsImport

val matchers : matcher list

val get_model_from_db :
  Procname.t -> PulseValueOrigin.t ProcnameDispatcher.Call.FuncArg.t list -> model option

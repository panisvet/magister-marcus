import { onRequestOptions as __api_chat_js_onRequestOptions } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/api/chat.js"
import { onRequestPost as __api_chat_js_onRequestPost } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/api/chat.js"
import { onRequestPost as __api_tts_js_onRequestPost } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/api/tts.js"
import { onRequestOptions as __tts_js_onRequestOptions } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/tts.js"
import { onRequestPost as __tts_js_onRequestPost } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/tts.js"
import { onRequest as __img_js_onRequest } from "/Users/svetlanabirthisel/Developer/magister-marcus/functions/img.js"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_chat_js_onRequestOptions],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_js_onRequestPost],
    },
  {
      routePath: "/api/tts",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_tts_js_onRequestPost],
    },
  {
      routePath: "/tts",
      mountPath: "/",
      method: "OPTIONS",
      middlewares: [],
      modules: [__tts_js_onRequestOptions],
    },
  {
      routePath: "/tts",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__tts_js_onRequestPost],
    },
  {
      routePath: "/img",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__img_js_onRequest],
    },
  ]
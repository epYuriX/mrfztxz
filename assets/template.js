// assets / template.js
/**
 * 这个 template 是通行证模板, 用 json 格式表示的
 */
export const template = {
  "width": 590,
  "height": 1180,
  "ppi": 300,
  "layers": [
    {
      "id": "group_front",
      "type": "group",
      "visible": true,
      "opacity": 100,
      "name": "正面",
      "children": [
        {
          "id": "cutting_line",
          "type": "image",
          "visible": true,
          "opacity": 100,
          "src": "assets/layers/front/cutting line.png",
          "width": 590,
          "height": 1180,
          "layout": {
            "left": 0,
            "top": 0
          }
        },
        {
          "id": "group_text",
          "type": "group",
          "visible": true,
          "opacity": 100,
          "name": "文本",
          "children": [
            {
              "id": "left_title",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "RHODES  ISLAND",
              "layout": {
                "left": 96,
                "top": -5,
                "rotate": 90
              },
              "font": {
                "family": "Bebas Neue",
                "style": "Regular",
                "size": 30.29,
                "color": "#ffffff",
                "tracking": -40,
                "hScale": 127
              }
            },
            // {
            //   "id": "name2",
            //   "type": "text",
            //   "visible": true,
            //   "opacity": 100,
            //   "text": "name2",
            //   "layout": {
            //     "top": 716.8,
            //     "follow": {
            //       "target": "name1",
            //       "xAlign": "right",
            //       "offsetX": 8.7
            //     }
            //   },
            //   "font": {
            //     "family": "Bebas Neue",
            //     "style": "Regular",
            //     "size": 10,
            //     "color": "#ffffff",
            //     "tracking": 0,
            //     "hScale": 100
            //   }
            // },
            {
              "id": "name1",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "MIZUKI",
              "layout": {
                "left": 114,
                "top": 692
              },
              "font": {
                "family": "Bebas Neue",
                "style": "Regular",
                "size": 20.3,
                "color": "#ffffff",
                "tracking": -25,
                "hScale": 100
              }
            },
            {
              "id": "ARKNIGHTS - LT40",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "ARKNIGHTS - LT40",
              "layout": {
                "left": 115.9,
                "top": 765.1
              },
              "font": {
                "family": "Noto Sans S Chinese",
                "style": "Bold",
                "size": 4,
                "color": "#ffffff",
                "tracking": 0,
                "hScale": 100
              }
            },
            {
              "id": "staff",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "STAFF",
              "layout": {
                "left": 116.6,
                "top": 793.5
              },
              "font": {
                "family": "Bebas Neue",
                "style": "Regular",
                "size": 4.5,
                "color": "#ffffff",
                "tracking": 0,
                "hScale": 150
              }
            },
            {
              "id": "operator_of_rhodes_island",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "Operator of Rhodes Island",
              "layout": {
                "left": 116.5,
                "top": 1107
              },
              "font": {
                "family": "Noto Sans",
                "style": "Regular",
                "size": 4.5,
                "color": "#ffffff",
                "tracking": 20,
                "hScale": 100
              }
            },
            {
              "id": "profession",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "CASTER/RHODES ISLAND",
              "layout": {
                "left": 116.5,
                "top": 1130.3
              },
              "font": {
                "family": "Noto Sans S Chinese",
                "style": "Medium",
                "size": 3.7,
                "color": "#ffffff",
                "tracking": 0,
                "hScale": 100
              }
            },
            {
              "id": "@ARKNIGHTS",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "@ARKNIGHTS",
              "layout": {
                "left": 116.5,
                "top": 1151
              },
              "font": {
                "family": "Noto Sans S Chinese",
                "style": "Bold",
                "size": 3.6,
                "color": "#ffffff",
                "tracking": 0,
                "hScale": 100
              }
            },
            {
              "id": "RHODES ISLAND INC.",
              "type": "text",
              "visible": true,
              "opacity": 100,
              "text": "RHODES ISLAND INC.",
              "layout": {
                "left": 567,
                "top": 520,
                "rotate": 90
              },
              "font": {
                "family": "Myriad Pro",
                "style": "Bold",
                "size": 4.5,
                "color": "#ffffff",
                "tracking": -10,
                "hScale": 100
              }
            }
          ]
        },
        {
          "id": "group_profession_logo",
          "type": "group",
          "visible": false,
          "opacity": 100,
          "name": "职业图标",
          "children": [
            {
              "id": "null",
              "type": "image",
              "visible": false,
              "opacity": 0,
              "name": "无",
              "src": "assets/layers/front/profession/vanguard.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_vanguard",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "先锋",
              "src": "assets/layers/front/profession/vanguard.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_guard",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "近卫",
              "src": "assets/layers/front/profession/guard.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_defender",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "重装",
              "src": "assets/layers/front/profession/defender.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_supporter",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "辅助",
              "src": "assets/layers/front/profession/supporter.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_sniper",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "狙击",
              "src": "assets/layers/front/profession/sniper.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_medic",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "医疗",
              "src": "assets/layers/front/profession/medic.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_caster",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "术士",
              "src": "assets/layers/front/profession/caster.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "profession_logo_specialist",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "特种",
              "src": "assets/layers/front/profession/specialist.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            }
          ]
        },
        {
          "id": "group_decorative_patterns",
          "type": "group",
          "visible": true,
          "opacity": 100,
          "name": "装饰图案",
          "children": [
            {
              "id": "frame",
              "type": "image",
              "visible": true,
              "opacity": 100,
              "src": "assets/layers/front/decorative patterns/frame.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "mrfz_logo",
              "type": "image",
              "visible": true,
              "opacity": 100,
              "src": "assets/layers/front/mrfz logo.png",
              "width": 590,
              "height": 1180,
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              "id": "jian_bian",
              "type": "color",
              "visible": true,
              "opacity": 100,
              "color": "#00bfff",
              "width": 590,
              "height": 495,
              "layout": {
                "left": 0,
                "top": 685
              },
              "gradient": {
                "direction": "rb-to-lt",
                "fromAlpha": 0.5, // 起点不透明度
                "toAlphaAt": 0.5, // 到 50% 位置变为 0
              }
            },

          ]
        }
      ]
    },
    // {
    //   "id": "group_back",
    //   "type": "group",
    //   "name": "背面",
    //   "visible": false,
    //   "opacity": 100,
    //   "children": []
    // },
    {
      "id": "group_middle",
      "type": "group",
      "name": "中层",
      "visible": true,
      "opacity": 100,
      "children": [
        {
          // 阵营图标
          "id": "faction",
          "type": "group",
          "name": "阵营图标",
          "visible": false,
          "opacity": 32,
          "children": [
            {
              "id": "null",
              "type": "image",
              "visible": false,
              "opacity": 0,
              "name": "无",
              "src": "assets/layers/middle/faction/ba_bie_ta.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 巴别塔
              "id": "ba_bie_ta",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "巴别塔",
              "src": "assets/layers/middle/faction/ba_bie_ta.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 东国
              "id": "dong_guo",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "东国",
              "src": "assets/layers/middle/faction/dong_guo.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 哥伦比亚
              "id": "ge_lun_bi_ya",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "哥伦比亚",
              "src": "assets/layers/middle/faction/ge_lun_bi_ya.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 黑钢国际
              "id": "hei_gang_guo_ji",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "黑钢国际",
              "src": "assets/layers/middle/faction/hei_gang_guo_ji.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 喀兰贸易
              "id": "ka_lan_mao_yi",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "喀兰贸易",
              "src": "assets/layers/middle/faction/ka_lan_mao_yi.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 卡西米尔
              "id": "ka_xi_mi_er",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "卡西米尔",
              "src": "assets/layers/middle/faction/ka_xi_mi_er.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 卡兹戴尔
              "id": "ka_zi_dai_er",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "卡兹戴尔",
              "src": "assets/layers/middle/faction/ka_zi_dai_er.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 拉特兰
              "id": "la_te_lan",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "拉特兰",
              "src": "assets/layers/middle/faction/la_te_lan.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 莱塔尼亚
              "id": "lai_ta_ni_ya",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "莱塔尼亚",
              "src": "assets/layers/middle/faction/lai_ta_ni_ya.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 莱茵生命
              "id": "lai_yin_sheng_ming",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "莱茵生命",
              "src": "assets/layers/middle/faction/lai_yin_sheng_ming.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 雷姆必拓
              "id": "lei_mu_bi_tuo",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "雷姆必拓",
              "src": "assets/layers/middle/faction/lei_mu_bi_tuo.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 鲤氏
              "id": "li_shi",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "鲤氏",
              "src": "assets/layers/middle/faction/li_shi.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 龙门近卫局
              "id": "long_men_jin_wei_ju",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "龙门近卫局",
              "src": "assets/layers/middle/faction/long_men_jin_wei_ju.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 罗德岛
              "id": "luo_de_dao",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "罗德岛",
              "src": "assets/layers/middle/faction/luo_de_dao.png",
              "layout": {
                "left": 0,
                "top": 0
              }
            },
            {
              // 企鹅物流
              "id": "qi_e_wu_liu",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "企鹅物流",
              "src": "assets/layers/middle/faction/qi_e_wu_liu.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 萨尔贡
              "id": "sa_er_gong",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "萨尔贡",
              "src": "assets/layers/middle/faction/sa_er_gong.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 萨米
              "id": "sa_mi",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "萨米",
              "src": "assets/layers/middle/faction/sa_mi.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 深池
              "id": "shen_chi",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "深池",
              "src": "assets/layers/middle/faction/shen_chi.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 深海猎人
              "id": "shen_hai_lie_ren",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "深海猎人",
              "src": "assets/layers/middle/faction/shen_hai_lie_ren.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 使徒
              "id": "shi_tu",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "使徒",
              "src": "assets/layers/middle/faction/shi_tu.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 岁
              "id": "sui",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "岁",
              "src": "assets/layers/middle/faction/sui.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // sweep
              "id": "sweep",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "sweep",
              "src": "assets/layers/middle/faction/sweep.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 维多利亚
              "id": "wei_duo_li_ya",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "维多利亚",
              "src": "assets/layers/middle/faction/wei_duo_li_ya.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 乌萨斯
              "id": "wu_sa_si",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "乌萨斯",
              "src": "assets/layers/middle/faction/wu_sa_si.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 汐斯塔
              "id": "xi_si_ta",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "汐斯塔",
              "src": "assets/layers/middle/faction/xi_si_ta.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 叙拉古
              "id": "xu_la_gu",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "叙拉古",
              "src": "assets/layers/middle/faction/xu_la_gu.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            },
            {
              // 炎
              "id": "yan",
              "type": "image",
              "visible": false,
              "opacity": 100,
              "name": "炎",
              "src": "assets/layers/middle/faction/yan.png",
              "layout": {
                "left": 0,
                "top": 0
              },
            }
          ],
        },
        {
          // 挡板
          "id": "dang_ban",
          "type": "color",
          "visible": true,
          "opacity": 100,
          "color": "#8a60ab",
          "width": 590,
          "height": 495,
          "layout": {
            "left": 0,
            "top": 685
          }
        },
        {
          // 人物图片
          "id": "tu_pian",
          "type": "image",
          "visible": true,
          "opacity": 100,
          "editable": true,
          "src": "assets/layers/tuPian.png",
          "layout": {
            "left": 0,
            "top": 0
          }
        }
      ]
    }
  ]
};
export const back = {
  "width": 590,
  "height": 1180,
  "ppi": 300,
  "layers": [
    {
      "id": "group_text",
      "type": "group",
      "visible": true,
      "opacity": 100,
      "name": "文本",
      "children": [
        {
          "id": "left_title",
          "type": "text",
          "visible": true,
          "opacity": 100,
          "text": "RHODES  ISLAND",
          "layout": {
            "left": 620,
            "top": -5,
            "rotate": 90,
            "flip": "horizontal", // 水平翻转
          },
          "font": {
            "family": "Bebas Neue",
            "style": "Regular",
            "size": 30.29,
            "color": "#ffffff",
            "tracking": -40,
            "hScale": 127
          }
        },
        {
          "id": "RHODES ISLAND INC.",
          "type": "text",
          "visible": true,
          "opacity": 100,
          "text": "RHODES ISLAND INC.",
          "layout": {
            "left": 36,
            "top": 520,
            "rotate": 90,

          },
          "font": {
            "family": "Myriad Pro",
            "style": "Bold",
            "size": 4.5,
            "color": "#ffffff",
            "tracking": -10,
            "hScale": 100
          }
        },
        {
          "id": "operator_of_rhodes_island",
          "type": "text",
          "visible": true,
          "opacity": 100,
          "text": "Operator of Rhodes Island",
          "layout": {
            "left": 20,
            "top": 815,
          },
          "font": {
            "family": "Noto Sans",
            "style": "Regular",
            "size": 4.5,
            "color": "#ffffff",
            "tracking": 20,
            "hScale": 100
          }
        },
        {
          "id": "profession",
          "type": "text",
          "visible": true,
          "opacity": 100,
          "text": "CASTER/RHODES ISLAND",
          "layout": {
            "left": 20,
            "top": 837.5
          },
          "font": {
            "family": "Noto Sans S Chinese",
            "style": "Medium",
            "size": 3.7,
            "color": "#ffffff",
            "tracking": 0,
            "hScale": 100
          }
        },
        {
          "id": "©HYPERGRYPH",
          "type": "text",
          "visible": true,
          "opacity": 100,
          "text": "©HYPERGRYPH",
          "layout": {
            "left": 20,
            "top": 855.8
          },
          "font": {
            "family": "Noto Sans S Chinese",
            "style": "Bold",
            "size": 3.6,
            "color": "#ffffff",
            "tracking": 0,
            "hScale": 100
          }
        },
      ]
    },
    {
      "id": "frame",
      "type": "image",
      "visible": true,
      "opacity": 100,
      "src": "assets/layers/back/frame.png",
      "layout": {
        "left": 0,
        "top": 0
      },
    },
    {
      // 挡板
      "id": "dang_ban",
      "type": "color",
      "visible": true,
      "opacity": 100,
      "color": "#8a60ab",
      "width": 590,
      "height": 495,
      "layout": {
        "left": 0,
        "top": 685
      }
    },
    {
      // 背影
      "id": "tu_pian_back",
      "type": "image_back",
      "visible": true,
      "opacity": 100,
      "src": "assets/layers/tuPian.png",
      "color": "#fff1b9",
      "follow": "tu_pian",
      "layout": {
        "left": 0,
        "top": 0
      },
      "mirror": "horizontal"
    }
  ]
};

console.log("- template.js OK -", template, back);
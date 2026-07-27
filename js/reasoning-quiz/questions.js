// Bilingual quiz data for the reasoning trainer.
// Russian and English text are stored side by side in ru/en fields.

export const quiz = [
  {
    "title": {
      "ru": "Ситуация",
      "en": "Scenario"
    },
    "image": "/images/test/effect-blood.webp",
    "text": {
      "ru": "На фото у рыбы виден красный участок на коже. Что можно утверждать?",
      "en": "The photo shows a red area on the fish's skin. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "У рыбы бактериальная инфекция.",
          "en": "The fish has a bacterial infection."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Это причинный вывод. По одному внешнему признаку нельзя установить бактериальную инфекцию.",
          "en": "This is a causal conclusion. A bacterial infection cannot be established from one external sign alone."
        }
      },
      {
        "text": {
          "ru": "У рыбы воспаление кожи.",
          "en": "The fish has skin inflammation."
        },
        "level": {
          "ru": "Возможная интерпретация",
          "en": "Possible interpretation"
        },
        "tone": "warn",
        "thinking": "interpretation",
        "scores": {
          "observation": 1,
          "caution": 1,
          "data": 0
        },
        "explain": {
          "ru": "Воспаление возможно, но это уже интерпретация. Нужны дополнительные признаки.",
          "en": "Inflammation is possible, but this is already an interpretation. Additional signs are needed."
        }
      },
      {
        "text": {
          "ru": "У рыбы участок красного цвета на коже.",
          "en": "There is a red area on the fish's skin."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "data": 2
        },
        "explain": {
          "ru": "Это описание наблюдения без преждевременного диагноза.",
          "en": "This describes the observation without making a premature diagnosis."
        }
      },
      {
        "text": {
          "ru": "У рыбы сепсис.",
          "en": "The fish has sepsis."
        },
        "level": {
          "ru": "Слишком сильный вывод",
          "en": "Overstated conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Сепсис нельзя установить по одному красному участку на коже.",
          "en": "Sepsis cannot be established from a single red area on the skin."
        }
      }
    ],
    "caption": {
      "ru": "",
      "en": ""
    }
  },
  {
    "id": "granulomas-spleen-01",
    "title": {
      "ru": "Осмотр",
      "en": "Examination"
    },
    "image": "/images/test/splenic_granulomas.webp",
    "caption": {
      "ru": "Селезёнка рыбы при диагностическом вскрытии.",
      "en": "Fish spleen during diagnostic necropsy."
    },
    "text": {
      "ru": "При вскрытии у рыбы обнаружены плотные белые узелки в селезёнке. Что можно утверждать?",
      "en": "During necropsy, dense white nodules were found in the fish's spleen. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "У рыбы микобактериоз.",
          "en": "The fish has mycobacteriosis."
        },
        "level": {
          "ru": "Возможная интерпретация",
          "en": "Possible interpretation"
        },
        "tone": "warn",
        "thinking": "interpretation",
        "scores": {
          "observation": 1,
          "caution": 1,
          "method": 1
        },
        "explain": {
          "ru": "Микобактериоз может сопровождаться образованием гранулём, однако только по макроскопической картине подтвердить его нельзя.",
          "en": "Mycobacteriosis can be associated with granuloma formation, but it cannot be confirmed from the gross appearance alone."
        }
      },
      {
        "text": {
          "ru": "Утилизировать всё поголовье.",
          "en": "Dispose of the entire stock."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Такое решение нельзя принимать только по результатам вскрытия одной рыбы.",
          "en": "Such a decision cannot be made based only on the necropsy of one fish."
        }
      },
      {
        "text": {
          "ru": "Обнаружены гранулёмы.",
          "en": "Granulomas were found."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "method": 2
        },
        "explain": {
          "ru": "Гранулёмы — это морфологическая находка. Их наличие можно установить при вскрытии, но причина требует дополнительных исследований.",
          "en": "Granulomas are a morphological finding. Their presence can be recorded at necropsy, but the cause requires further investigation."
        }
      },
      {
        "text": {
          "ru": "Остальным рыбам необходимо лечение.",
          "en": "The remaining fish need treatment."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Необходимость лечения остальных рыб по этому наблюдению определить нельзя.",
          "en": "The need to treat the remaining fish cannot be determined from this observation alone."
        }
      }
    ]
  },
  {
    "id": "staining-01",
    "title": {
      "ru": "Решение",
      "en": "Decision"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Когда следует выполнять окраску мазков при диагностическом вскрытии?",
      "en": "When should smear staining be performed during a diagnostic necropsy?"
    },
    "answers": [
      {
        "text": {
          "ru": "При наличии ран.",
          "en": "When wounds are present."
        },
        "level": {
          "ru": "Недостаточный объём исследования",
          "en": "Insufficient scope of examination"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Раны являются лишь одним из возможных показаний, но не ограничивают необходимость окраски.",
          "en": "Wounds are only one possible indication; they do not define the need for staining."
        }
      },
      {
        "text": {
          "ru": "Всегда.",
          "en": "Always."
        },
        "level": {
          "ru": "Корректный подход",
          "en": "Correct approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Окраска мазков входит в стандарт диагностического исследования независимо от внешних признаков.",
          "en": "Smear staining is part of a standard diagnostic examination regardless of external signs."
        }
      },
      {
        "text": {
          "ru": "При наличии воспаления.",
          "en": "When inflammation is present."
        },
        "level": {
          "ru": "Недостаточный объём исследования",
          "en": "Insufficient scope of examination"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Отсутствие воспаления не означает, что окраска не нужна.",
          "en": "The absence of visible inflammation does not mean staining is unnecessary."
        }
      },
      {
        "text": {
          "ru": "При ватообразном налёте.",
          "en": "When there is a cotton-like growth."
        },
        "level": {
          "ru": "Частный случай",
          "en": "Specific case"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "При грибковых поражениях окраска действительно полезна, но этим показания не ограничиваются.",
          "en": "Staining is indeed useful with fungal lesions, but the indications are not limited to this situation."
        }
      }
    ]
  },
  {
    "id": "mycobacteriosis-01",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Какой из перечисленных признаков наиболее специфичен для микобактериоза?",
      "en": "Which of the listed signs is most specific for mycobacteriosis?"
    },
    "answers": [
      {
        "text": {
          "ru": "Очень худое тело.",
          "en": "A very thin body."
        },
        "level": {
          "ru": "Неспецифичный признак",
          "en": "Non-specific sign"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "observation": 0,
          "method": 0
        },
        "explain": {
          "ru": "Истощение встречается при многих заболеваниях.",
          "en": "Emaciation occurs in many diseases."
        }
      },
      {
        "text": {
          "ru": "Выявлены кислотоустойчивые бактерии.",
          "en": "Acid-fast bacteria were detected."
        },
        "level": {
          "ru": "Наиболее специфичный признак",
          "en": "Most specific sign"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "method": 3
        },
        "explain": {
          "ru": "Выявление кислотоустойчивых бактерий значительно повышает вероятность микобактериоза и требует дальнейшего подтверждения.",
          "en": "Detection of acid-fast bacteria substantially increases the probability of mycobacteriosis and requires further confirmation."
        }
      },
      {
        "text": {
          "ru": "Некротические гранулёмы.",
          "en": "Necrotic granulomas."
        },
        "level": {
          "ru": "Возможная интерпретация",
          "en": "Possible interpretation"
        },
        "tone": "warn",
        "thinking": "interpretation",
        "scores": {
          "observation": 1,
          "method": 1
        },
        "explain": {
          "ru": "Некротические гранулёмы могут встречаться и при других патологических процессах.",
          "en": "Necrotic granulomas can also occur in other pathological processes."
        }
      },
      {
        "text": {
          "ru": "Мелкие язвы на теле.",
          "en": "Small ulcers on the body."
        },
        "level": {
          "ru": "Неспецифичный признак",
          "en": "Non-specific sign"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "observation": 0,
          "method": 0
        },
        "explain": {
          "ru": "Язвы имеют множество возможных причин.",
          "en": "Ulcers have many possible causes."
        }
      }
    ]
  },
  {
    "id": "mass-mortality-01",
    "title": {
      "ru": "Стресс",
      "en": "Stress"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "В одном аквариуме начался массовый падёж рыб разных видов. Какое действие следует выполнить первым?",
      "en": "Mass mortality of several fish species began in one aquarium. What should be done first?"
    },
    "answers": [
      {
        "text": {
          "ru": "Проверить гидрохимические параметры воды.",
          "en": "Check the water chemistry parameters."
        },
        "level": {
          "ru": "Необходимый следующий этап",
          "en": "Necessary next step"
        },
        "tone": "warn",
        "thinking": "premature_decision",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Контроль гидрохимии обязателен, однако сначала необходимо прекратить воздействие возможного повреждающего фактора.",
          "en": "Water chemistry must be checked, but first the possible damaging environmental factor should be removed."
        }
      },
      {
        "text": {
          "ru": "Пересадить рыб в безопасную воду.",
          "en": "Move the fish to safe water."
        },
        "level": {
          "ru": "Наиболее обоснованное первое действие",
          "en": "Most justified first action"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "causality": 3
        },
        "explain": {
          "ru": "При остром падеже нескольких видов прежде всего следует прекратить воздействие общего фактора среды. После этого проводится диагностика причин.",
          "en": "With acute mortality across several species, the first priority is to stop exposure to a shared environmental factor. The cause can then be investigated."
        }
      },
      {
        "text": {
          "ru": "Внести антибиотик.",
          "en": "Add an antibiotic."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Причина падежа неизвестна, поэтому антибиотик может оказаться бесполезным или даже ухудшить ситуацию.",
          "en": "The cause of mortality is unknown, so an antibiotic may be useless or even worsen the situation."
        }
      },
      {
        "text": {
          "ru": "Внести метиленовый синий.",
          "en": "Add methylene blue."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение без понимания причины не должно быть первым действием.",
          "en": "Treatment without understanding the cause should not be the first action."
        }
      }
    ]
  },
  {
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "text": {
      "ru": "После внесения препарата рыба стала активнее. Что из этого следует?",
      "en": "After a drug was added, the fish became more active. What follows from this?"
    },
    "answers": [
      {
        "text": {
          "ru": "Препарат помог.",
          "en": "The drug helped."
        },
        "level": {
          "ru": "Возможная интерпретация",
          "en": "Possible interpretation"
        },
        "tone": "warn",
        "thinking": "causality_error",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Это возможно, но пока не доказано. Последовательность событий не равна причинности.",
          "en": "That is possible, but it has not been proven yet. Sequence of events is not the same as causality."
        }
      },
      {
        "text": {
          "ru": "Болезнь была бактериальной.",
          "en": "The disease was bacterial."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Такой вывод вообще не следует из наблюдения.",
          "en": "This conclusion does not follow from the observation at all."
        }
      },
      {
        "text": {
          "ru": "Улучшение произошло после внесения препарата.",
          "en": "The improvement occurred after the drug was added."
        },
        "level": {
          "ru": "Корректная формулировка",
          "en": "Correct formulation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "causality": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Мы фиксируем последовательность событий, но не доказываем причину.",
          "en": "We can record the sequence of events, but we have not proven the cause."
        }
      },
      {
        "text": {
          "ru": "Нужно обработать всех рыб.",
          "en": "All fish should be treated."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Это управленческое решение без достаточных данных.",
          "en": "This is a management decision made without sufficient data."
        }
      }
    ],
    "caption": {
      "ru": "",
      "en": ""
    }
  },
  {
    "id": "survivorship-treatment",
    "title": {
      "ru": "Выборка",
      "en": "Sample"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "После обработки 20 больных рыб погибло ровно три. Что можно утверждать?",
      "en": "After treatment of 20 sick fish, exactly three died. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Причиной гибели стал препарат.",
          "en": "The drug caused the deaths."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "По совпадению во времени нельзя установить причину гибели.",
          "en": "A temporal coincidence is not enough to establish the cause of death."
        }
      },
      {
        "text": {
          "ru": "Зарегистрирована гибель трёх рыб после обработки.",
          "en": "Three fish died after treatment."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "causality": 3
        },
        "explain": {
          "ru": "Это единственное утверждение, полностью следующее из представленных данных.",
          "en": "This is the only statement that fully follows from the data provided."
        }
      },
      {
        "text": {
          "ru": "Препарат токсичен.",
          "en": "The drug is toxic."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Для оценки токсичности этих данных недостаточно.",
          "en": "These data are insufficient to assess toxicity."
        }
      },
      {
        "text": {
          "ru": "Препарат применять нельзя.",
          "en": "The drug must not be used."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Решение принято без установления причины гибели.",
          "en": "The decision was made without establishing the cause of death."
        }
      }
    ]
  },
  {
    "id": "authority",
    "title": {
      "ru": "Апелляция",
      "en": "Appeal"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Известный специалист утверждает, что заболевание всегда вызывается одной причиной. Что следует сделать?",
      "en": "A well-known specialist says that the disease is always caused by one factor. What should be done?"
    },
    "answers": [
      {
        "text": {
          "ru": "Использовать лечение сразу.",
          "en": "Use treatment immediately."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Даже мнение опытного специалиста не заменяет диагностику.",
          "en": "Even an experienced specialist's opinion does not replace diagnostics."
        }
      },
      {
        "text": {
          "ru": "Проверить, подтверждается ли утверждение наблюдениями.",
          "en": "Check whether the claim is supported by observations."
        },
        "level": {
          "ru": "Научный подход",
          "en": "Scientific approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Любое утверждение должно подтверждаться конкретными данными.",
          "en": "Any claim should be supported by specific data."
        }
      },
      {
        "text": {
          "ru": "Не сомневаться, поскольку специалист опытный.",
          "en": "Do not question it, because the specialist is experienced."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Опыт снижает вероятность ошибки, но не исключает её.",
          "en": "Experience reduces the probability of error, but it does not remove it."
        }
      },
      {
        "text": {
          "ru": "Использовать это как окончательный диагноз.",
          "en": "Use it as the final diagnosis."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Мнение специалиста не является диагнозом.",
          "en": "A specialist's opinion is not a diagnosis by itself."
        }
      }
    ]
  },
  {
    "id": "photo-wound",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/effect-wound.webp",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что можно утверждать по фотографии?",
      "en": "What can be stated from the photograph?"
    },
    "answers": [
      {
        "text": {
          "ru": "Обнаружен дефект кожи.",
          "en": "A skin defect is present."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Фотография позволяет уверенно говорить только о видимом изменении.",
          "en": "The photograph allows only the visible change to be stated with confidence."
        }
      },
      {
        "text": {
          "ru": "Бактериальная инфекция.",
          "en": "Bacterial infection."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "По фотографии установить причину поражения невозможно.",
          "en": "The cause of the lesion cannot be established from the photograph."
        }
      },
      {
        "text": {
          "ru": "Требуется антибиотик.",
          "en": "An antibiotic is required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Назначение лечения требует дополнительных данных.",
          "en": "Treatment requires additional data."
        }
      },
      {
        "text": {
          "ru": "Вирусная инфекция.",
          "en": "Viral infection."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "По внешнему виду нельзя определить этиологию процесса.",
          "en": "The etiology of the process cannot be determined from appearance alone."
        }
      }
    ]
  },
  {
    "id": "scratching",
    "title": {
      "ru": "Неослон",
      "en": "Not the flying elephant"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "В аквариумистике часто говорят: «Рыба чешется». Рыба периодически касается телом дна аквариума. Что можно утверждать?",
      "en": "Aquarists often say: 'The fish is scratching.' The fish periodically rubs its body against the bottom of the aquarium. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "У рыбы бактериальная инфекция.",
          "en": "The fish has a bacterial infection."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Такое поведение не указывает на конкретную причину.",
          "en": "This behavior does not indicate a specific cause."
        }
      },
      {
        "text": {
          "ru": "У рыбы моногенеи на жабрах.",
          "en": "The fish has monogeneans on the gills."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Это лишь одна из возможных причин.",
          "en": "This is only one possible cause."
        }
      },
      {
        "text": {
          "ru": "Высока вероятность паразитических инфузорий.",
          "en": "Parasitic ciliates are likely."
        },
        "level": {
          "ru": "Допустимая гипотеза",
          "en": "Acceptable hypothesis"
        },
        "tone": "warn",
        "thinking": "hypothesis",
        "scores": {
          "observation": 1,
          "caution": 2
        },
        "explain": {
          "ru": "Такое предположение допустимо, но требует проверки.",
          "en": "This assumption is acceptable, but it requires verification."
        }
      },
      {
        "text": {
          "ru": "Рыба демонстрирует необычное поведение.",
          "en": "The fish is showing unusual behavior."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это единственное утверждение, полностью следующее из наблюдения.",
          "en": "This is the only statement that fully follows from the observation."
        }
      }
    ]
  },
  {
    "id": "parasite-slide",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/cryptocaryon_trophont.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На препарате обнаружен паразит. Что можно утверждать?",
      "en": "A parasite was found in the slide preparation. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Этот организм вызвал заболевание.",
          "en": "This organism caused the disease."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Присутствие организма ещё не доказывает его роль.",
          "en": "The presence of an organism does not prove its role."
        }
      },
      {
        "text": {
          "ru": "Паразит присутствует в препарате.",
          "en": "A parasite is present in the preparation."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это единственное утверждение, подтверждаемое исследованием.",
          "en": "This is the only statement supported by the examination."
        }
      },
      {
        "text": {
          "ru": "Необходимо лечение.",
          "en": "Treatment is required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Решение о лечении требует оценки клинической картины.",
          "en": "A treatment decision requires assessment of the clinical picture."
        }
      },
      {
        "text": {
          "ru": "Рыба погибла из-за паразита.",
          "en": "The fish died because of the parasite."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Причинная связь не установлена.",
          "en": "A causal relationship has not been established."
        }
      }
    ]
  },
  {
    "id": "negative-culture",
    "title": {
      "ru": "Ошибка выжившего",
      "en": "Survivorship bias"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Бактериологический посев не выявил роста бактерий. Что можно утверждать?",
      "en": "Bacterial culture did not show bacterial growth. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Посев отрицательный.",
          "en": "The culture was negative."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Отрицательный результат исследования не равен отсутствию бактерий.",
          "en": "A negative test result is not the same as absence of bacteria."
        }
      },
      {
        "text": {
          "ru": "Бактериальной инфекции нет.",
          "en": "There is no bacterial infection."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "survivorship",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Отрицательный посев может иметь различные причины.",
          "en": "A negative culture may have different explanations."
        }
      },
      {
        "text": {
          "ru": "Причина заболевания известна.",
          "en": "The cause of disease is known."
        },
        "level": {
          "ru": "Логическая ошибка",
          "en": "Logical error"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Отрицательный результат не устанавливает причину заболевания.",
          "en": "A negative result does not establish the cause of disease."
        }
      },
      {
        "text": {
          "ru": "Антибиотики не нужны.",
          "en": "Antibiotics are not needed."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечебное решение нельзя принимать только по результату одного исследования.",
          "en": "A treatment decision cannot be made from one test result alone."
        }
      }
    ]
  },
  {
    "id": "sample-size",
    "title": {
      "ru": "Выборка",
      "en": "Sample"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "За год было зарегистрировано пять подобных случаев. Что можно утверждать?",
      "en": "Five similar cases were recorded over a year. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Это закономерность.",
          "en": "This is a pattern."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "causality": 0
        },
        "explain": {
          "ru": "Для такого вывода данных недостаточно.",
          "en": "There is not enough data for that conclusion."
        }
      },
      {
        "text": {
          "ru": "Это редкое наблюдение.",
          "en": "This is a rare observation."
        },
        "level": {
          "ru": "Интерпретация",
          "en": "Interpretation"
        },
        "tone": "warn",
        "thinking": "data_limit",
        "scores": {
          "causality": 1
        },
        "explain": {
          "ru": "Пять случаев сами по себе не позволяют оценить частоту явления.",
          "en": "Five cases by themselves do not allow the frequency of the event to be assessed."
        }
      },
      {
        "text": {
          "ru": "Требуется дальнейшее накопление данных.",
          "en": "Further data collection is required."
        },
        "level": {
          "ru": "Научный подход",
          "en": "Scientific approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "causality": 3,
          "method": 3
        },
        "explain": {
          "ru": "Имеющихся данных недостаточно для уверенных выводов.",
          "en": "The available data are insufficient for confident conclusions."
        }
      },
      {
        "text": {
          "ru": "Причина уже известна.",
          "en": "The cause is already known."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "causality": 0
        },
        "explain": {
          "ru": "Количество наблюдений не определяет причину явления.",
          "en": "The number of observations does not determine the cause of the event."
        }
      }
    ]
  },
  {
    "id": "logic",
    "title": {
      "ru": "Логика",
      "en": "Logic"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Какое утверждение является наиболее научным?",
      "en": "Which statement is the most scientific?"
    },
    "answers": [
      {
        "text": {
          "ru": "Так всегда происходит.",
          "en": "This always happens."
        },
        "level": {
          "ru": "Недостаточное обоснование",
          "en": "Insufficient justification"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "method": 0
        },
        "explain": {
          "ru": "Категоричность не заменяет доказательства.",
          "en": "A categorical statement is not a substitute for evidence."
        }
      },
      {
        "text": {
          "ru": "Все специалисты так считают.",
          "en": "All specialists think so."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0
        },
        "explain": {
          "ru": "Мнение большинства не является доказательством.",
          "en": "The opinion of the majority is not evidence."
        }
      },
      {
        "text": {
          "ru": "Это объяснение подтверждено наблюдениями.",
          "en": "This explanation is supported by observations."
        },
        "level": {
          "ru": "Научный подход",
          "en": "Scientific approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3
        },
        "explain": {
          "ru": "Наблюдения и проверка лежат в основе научных выводов.",
          "en": "Observation and verification are the basis of scientific conclusions."
        }
      },
      {
        "text": {
          "ru": "Это объяснение кажется логичным.",
          "en": "This explanation seems logical."
        },
        "level": {
          "ru": "Недостаточное обоснование",
          "en": "Insufficient justification"
        },
        "tone": "warn",
        "thinking": "data_limit",
        "scores": {
          "method": 1
        },
        "explain": {
          "ru": "Логичность не гарантирует истинности.",
          "en": "Logical plausibility does not guarantee truth."
        }
      }
    ]
  },
  {
    "id": "feeding",
    "title": {
      "ru": "Ошибка выжившего",
      "en": "Survivorship bias"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Рыба перестала принимать корм. Что можно утверждать?",
      "en": "The fish stopped accepting food. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Рыба больна.",
          "en": "The fish is sick."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "survivorship",
        "scores": {
          "observation": 0
        },
        "explain": {
          "ru": "Причин отказа от корма может быть множество.",
          "en": "There may be many reasons for feed refusal."
        }
      },
      {
        "text": {
          "ru": "Рыба перестала принимать корм.",
          "en": "The fish stopped accepting food."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это единственное утверждение, полностью подтверждаемое наблюдением.",
          "en": "This is the only statement fully supported by the observation."
        }
      },
      {
        "text": {
          "ru": "Необходим антибиотик.",
          "en": "An antibiotic is required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0
        },
        "explain": {
          "ru": "Лечение нельзя назначать без выяснения причины.",
          "en": "Treatment cannot be prescribed without clarifying the cause."
        }
      },
      {
        "text": {
          "ru": "Причина уже понятна.",
          "en": "The cause is already clear."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0
        },
        "explain": {
          "ru": "По одному симптому установить причину невозможно.",
          "en": "A single symptom cannot establish the cause."
        }
      }
    ]
  },
  {
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/wound_bacteria_present.webp",
    "text": {
      "ru": "В мазке обнаружены бактерии. Что это доказывает?",
      "en": "Bacteria were found in a smear. What does this prove?"
    },
    "answers": [
      {
        "text": {
          "ru": "Бактерии вызвали заболевание.",
          "en": "The bacteria caused the disease."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Наличие бактерий не доказывает их этиологическую роль.",
          "en": "The presence of bacteria does not prove their etiologic role."
        }
      },
      {
        "text": {
          "ru": "Бактерии присутствовали в материале.",
          "en": "Bacteria were present in the material."
        },
        "level": {
          "ru": "Корректное утверждение",
          "en": "Correct statement"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это точная формулировка. Роль бактерий требует отдельной оценки.",
          "en": "This is the precise formulation. The role of the bacteria requires separate assessment."
        }
      },
      {
        "text": {
          "ru": "Нужен антибиотик.",
          "en": "An antibiotic is needed."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение не следует автоматически из факта обнаружения бактерий.",
          "en": "Treatment does not automatically follow from detecting bacteria."
        }
      },
      {
        "text": {
          "ru": "Это системная инфекция.",
          "en": "This is a systemic infection."
        },
        "level": {
          "ru": "Слишком сильный вывод",
          "en": "Overstated conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Системный процесс нельзя установить только по такому наблюдению.",
          "en": "A systemic process cannot be established from this observation alone."
        }
      }
    ],
    "caption": {
      "ru": "",
      "en": ""
    }
  },
  {
    "id": "enlarged-liver",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "У рыбы увеличена печень. Что можно утверждать?",
      "en": "The fish has an enlarged liver. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Рыба погибла из-за печени.",
          "en": "The fish died because of the liver."
        },
        "level": {
          "ru": "Причинная связь не установлена",
          "en": "Causal relationship not established"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Увеличение печени является находкой, но само по себе не доказывает причину гибели.",
          "en": "Liver enlargement is a finding, but by itself it does not prove the cause of death."
        }
      },
      {
        "text": {
          "ru": "У рыбы заболевание печени.",
          "en": "The fish has liver disease."
        },
        "level": {
          "ru": "Возможная интерпретация",
          "en": "Possible interpretation"
        },
        "tone": "warn",
        "thinking": "interpretation",
        "scores": {
          "observation": 1,
          "caution": 1,
          "data": 0
        },
        "explain": {
          "ru": "Заболевание печени возможно, но для такого вывода нужны дополнительные признаки и данные.",
          "en": "Liver disease is possible, but this conclusion needs additional signs and data."
        }
      },
      {
        "text": {
          "ru": "Печень увеличена.",
          "en": "The liver is enlarged."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "data": 2
        },
        "explain": {
          "ru": "Это точное описание обнаруженного изменения без преждевременного диагноза.",
          "en": "This is a precise description of the detected change without a premature diagnosis."
        }
      },
      {
        "text": {
          "ru": "Необходимы гепатопротекторы.",
          "en": "Hepatoprotective drugs are required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Назначение препарата не следует автоматически из факта увеличения печени.",
          "en": "Drug administration does not automatically follow from liver enlargement."
        }
      }
    ]
  },
  {
    "id": "water-change-sequence",
    "title": {
      "ru": "Последовательность",
      "en": "Sequence"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "После замены воды рыба перестала чесаться. Что можно утверждать?",
      "en": "After a water change, the fish stopped scratching. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Причиной была плохая вода.",
          "en": "Bad water was the cause."
        },
        "level": {
          "ru": "Подмена последовательности причинностью",
          "en": "Mistaking sequence for causality"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Изменение поведения после замены воды ещё не доказывает, что именно плохая вода была причиной.",
          "en": "A behavioral change after a water change does not prove that poor water quality was the cause."
        }
      },
      {
        "text": {
          "ru": "Замена воды устранила причину.",
          "en": "The water change removed the cause."
        },
        "level": {
          "ru": "Причина не доказана",
          "en": "Cause not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Можно зафиксировать последовательность событий, но не утверждать устранение причины без проверки.",
          "en": "The sequence of events can be recorded, but removal of the cause cannot be claimed without verification."
        }
      },
      {
        "text": {
          "ru": "После замены воды поведение изменилось.",
          "en": "The behavior changed after the water change."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "causality": 3,
          "caution": 3,
          "observation": 2
        },
        "explain": {
          "ru": "Это аккуратная формулировка: событие произошло после замены воды, но причинная связь не объявляется доказанной.",
          "en": "This is a careful formulation: the event occurred after the water change, but causality is not declared proven."
        }
      },
      {
        "text": {
          "ru": "Лечение оказалось эффективным.",
          "en": "The treatment was effective."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "В условии нет лечения и нет контроля, поэтому эффективность лечения из этого наблюдения не следует.",
          "en": "There was no treatment and no control in the scenario, so treatment efficacy does not follow from this observation."
        }
      }
    ]
  },
  {
    "id": "authority-diagnosis",
    "title": {
      "ru": "Апелляция",
      "en": "Appeal"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Ветеринар с большим опытом поставил диагноз. Что следует сделать?",
      "en": "An experienced veterinarian made a diagnosis. What should be done?"
    },
    "answers": [
      {
        "text": {
          "ru": "Начать лечение.",
          "en": "Start treatment."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение должно опираться не только на авторитет, но и на подтверждающие наблюдения.",
          "en": "Treatment should rely not only on authority, but also on supporting observations."
        }
      },
      {
        "text": {
          "ru": "Проверить, подтверждается ли диагноз наблюдениями.",
          "en": "Check whether the diagnosis is supported by observations."
        },
        "level": {
          "ru": "Научный подход",
          "en": "Scientific approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "observation": 2
        },
        "explain": {
          "ru": "Опыт специалиста важен, но диагноз всё равно должен проверяться по данным и признакам.",
          "en": "Specialist experience matters, but the diagnosis still needs to be checked against data and signs."
        }
      },
      {
        "text": {
          "ru": "Не сомневаться.",
          "en": "Do not question it."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Авторитет снижает риск ошибки, но не отменяет необходимость проверки.",
          "en": "Authority reduces the risk of error, but it does not remove the need for verification."
        }
      },
      {
        "text": {
          "ru": "Искать похожий случай.",
          "en": "Look for a similar case."
        },
        "level": {
          "ru": "Недостаточный метод",
          "en": "Insufficient method"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Похожие случаи могут помочь с гипотезами, но они не заменяют проверку текущего диагноза.",
          "en": "Similar cases can help generate hypotheses, but they do not replace checking the current diagnosis."
        }
      }
    ]
  },
  {
    "id": "single-aquarium-antibiotic",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "В одном аквариуме антибиотик помог. Что можно утверждать?",
      "en": "An antibiotic helped in one aquarium. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Препарат эффективен всегда.",
          "en": "The drug is always effective."
        },
        "level": {
          "ru": "Вывод по неполному наблюдению",
          "en": "Conclusion from incomplete observation"
        },
        "tone": "bad",
        "thinking": "survivorship",
        "scores": {
          "causality": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Один успешный случай не позволяет переносить вывод на все ситуации.",
          "en": "One successful case cannot be generalized to all situations."
        }
      },
      {
        "text": {
          "ru": "Метод лечения доказан.",
          "en": "The treatment method has been proven."
        },
        "level": {
          "ru": "Недостаточность данных",
          "en": "Insufficient data"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "causality": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Для доказательства метода нужны сопоставимые случаи, контроль условий и повторяемость результата.",
          "en": "Proving a method requires comparable cases, control of conditions, and reproducibility of the result."
        }
      },
      {
        "text": {
          "ru": "В данном случае после применения наблюдалось улучшение.",
          "en": "In this case, improvement was observed after use."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "causality": 3,
          "caution": 3,
          "observation": 2
        },
        "explain": {
          "ru": "Это фиксирует наблюдаемую последовательность без превращения её в универсальное доказательство.",
          "en": "This records the observed sequence without turning it into universal proof."
        }
      },
      {
        "text": {
          "ru": "Можно рекомендовать всем.",
          "en": "It can be recommended to everyone."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "causality": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Рекомендация всем требует более сильных данных, чем один успешный случай.",
          "en": "A recommendation for everyone requires stronger data than one successful case."
        }
      }
    ]
  },
  {
    "id": "many-bacteria-smear",
    "title": {
      "ru": "Логика",
      "en": "Logic"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "В мазке с раны обнаружены многочисленные бактерии. Что можно утверждать?",
      "en": "Numerous bacteria were found in a wound smear. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Они вызвали заболевание.",
          "en": "They caused the disease."
        },
        "level": {
          "ru": "Причинная роль не доказана",
          "en": "Causal role not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Наличие бактерий в материале не доказывает, что они являются причиной заболевания.",
          "en": "The presence of bacteria in the material does not prove that they are the cause of disease."
        }
      },
      {
        "text": {
          "ru": "Рыба погибла от бактерий.",
          "en": "The fish died from bacteria."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Причину гибели нельзя установить только по обнаружению бактерий в мазке.",
          "en": "The cause of death cannot be established only from finding bacteria in a smear."
        }
      },
      {
        "text": {
          "ru": "В препарате присутствуют бактерии.",
          "en": "Bacteria are present in the preparation."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "observation": 2
        },
        "explain": {
          "ru": "Это точное утверждение, которое следует из результата исследования.",
          "en": "This is a precise statement that follows from the test result."
        }
      },
      {
        "text": {
          "ru": "Нужно лечить антибиотиком.",
          "en": "The fish should be treated with an antibiotic."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение не должно автоматически следовать из факта обнаружения бактерий.",
          "en": "Treatment should not automatically follow from the fact that bacteria were found."
        }
      }
    ]
  },
  {
    "id": "swollen-abdomen",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "У рыбы вздут живот. Что можно утверждать?",
      "en": "The fish has a swollen abdomen. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Водянка.",
          "en": "Dropsy."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Увеличение живота может иметь разные причины, поэтому диагноз по одному признаку ставить нельзя.",
          "en": "Abdominal enlargement can have different causes, so a diagnosis cannot be made from one sign."
        }
      },
      {
        "text": {
          "ru": "Запор.",
          "en": "Constipation."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Запор является только одной из возможных интерпретаций, а не установленным фактом.",
          "en": "Constipation is only one possible interpretation, not an established fact."
        }
      },
      {
        "text": {
          "ru": "Живот увеличен в объёме.",
          "en": "The abdomen is enlarged."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это описание видимого признака без преждевременного объяснения причины.",
          "en": "This describes the visible sign without prematurely explaining the cause."
        }
      },
      {
        "text": {
          "ru": "Необходимо слабительное.",
          "en": "A laxative is required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "observation": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Назначение слабительного предполагает причину, которая в условии не установлена.",
          "en": "Prescribing a laxative assumes a cause that has not been established in the scenario."
        }
      }
    ]
  },
  {
    "id": "mortality-control",
    "title": {
      "ru": "Контроль",
      "en": "Control"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "После обработки погибло меньше рыб. Что необходимо выяснить?",
      "en": "Fewer fish died after treatment. What needs to be clarified?"
    },
    "answers": [
      {
        "text": {
          "ru": "Что именно изменилось кроме лечения.",
          "en": "What else changed besides the treatment."
        },
        "level": {
          "ru": "Корректный контроль условий",
          "en": "Correct control of conditions"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "causality": 3
        },
        "explain": {
          "ru": "Чтобы оценить роль обработки, нужно понять, какие ещё условия могли повлиять на результат.",
          "en": "To assess the role of the treatment, it is necessary to understand what other conditions could have influenced the result."
        }
      },
      {
        "text": {
          "ru": "Препарат работает.",
          "en": "The drug works."
        },
        "level": {
          "ru": "Причинная связь не доказана",
          "en": "Causal relationship not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Снижение падежа после обработки не доказывает, что причиной был именно препарат.",
          "en": "Reduced mortality after treatment does not prove that the drug was the cause."
        }
      },
      {
        "text": {
          "ru": "Лечение доказано.",
          "en": "The treatment has been proven."
        },
        "level": {
          "ru": "Недостаточность данных",
          "en": "Insufficient data"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "method": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Для доказательства лечения нужны контроль условий, повторяемость и сравнение с альтернативными объяснениями.",
          "en": "Proving treatment requires control of conditions, reproducibility, and comparison with alternative explanations."
        }
      },
      {
        "text": {
          "ru": "Причина установлена.",
          "en": "The cause has been established."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "method": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Факт изменения падежа не устанавливает исходную причину проблемы.",
          "en": "A change in mortality does not establish the original cause of the problem."
        }
      }
    ]
  },
  {
    "id": "negative-parasite-slide",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "В препарате паразиты не обнаружены. Что можно утверждать?",
      "en": "No parasites were found in the preparation. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Паразитов нет.",
          "en": "There are no parasites."
        },
        "level": {
          "ru": "Вывод по неполному наблюдению",
          "en": "Conclusion from incomplete observation"
        },
        "tone": "bad",
        "thinking": "survivorship",
        "scores": {
          "observation": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Отрицательный результат одного препарата не доказывает отсутствие паразитов вообще.",
          "en": "One negative preparation does not prove absence of parasites in general."
        }
      },
      {
        "text": {
          "ru": "Метод не выявил паразитов в данном препарате.",
          "en": "The method did not detect parasites in this preparation."
        },
        "level": {
          "ru": "Корректная формулировка",
          "en": "Correct formulation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "observation": 2
        },
        "explain": {
          "ru": "Это аккуратное описание результата без расширения вывода за пределы исследования.",
          "en": "This is a careful description of the result without extending the conclusion beyond the study."
        }
      },
      {
        "text": {
          "ru": "Заболевание точно не паразитарное.",
          "en": "The disease is definitely not parasitic."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "method": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Один отрицательный препарат не исключает паразитарную природу заболевания.",
          "en": "One negative preparation does not rule out a parasitic disease."
        }
      },
      {
        "text": {
          "ru": "Нужно искать бактерии.",
          "en": "Bacteria should be looked for next."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Следующий диагностический шаг должен определяться всей картиной, а не только одним отрицательным результатом.",
          "en": "The next diagnostic step should be determined by the whole picture, not by one negative result alone."
        }
      }
    ]
  },
  {
    "id": "unknown-cause-honesty",
    "title": {
      "ru": "Честность",
      "en": "Honesty"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "После вскрытия причина гибели осталась неясной. Какой вывод наиболее научный?",
      "en": "After necropsy, the cause of death remained unclear. Which conclusion is the most scientific?"
    },
    "answers": [
      {
        "text": {
          "ru": "Причина гибели не паразитарного характера.",
          "en": "The cause of death was not parasitic."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "method": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Неясная причина не равна доказанному отсутствию паразитарного фактора.",
          "en": "An unclear cause is not the same as proven absence of a parasitic factor."
        }
      },
      {
        "text": {
          "ru": "Причина — стресс.",
          "en": "The cause was stress."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Стресс может быть гипотезой, но в условии он не установлен как причина.",
          "en": "Stress may be a hypothesis, but in the scenario it has not been established as the cause."
        }
      },
      {
        "text": {
          "ru": "Причину установить не удалось.",
          "en": "The cause could not be established."
        },
        "level": {
          "ru": "Научная честность",
          "en": "Scientific honesty"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "data": 3
        },
        "explain": {
          "ru": "Это корректная фиксация ограничения данных: причина не установлена, а не заменена удобной догадкой.",
          "en": "This correctly records the limitation of the data: the cause is not established, and it is not replaced by a convenient guess."
        }
      },
      {
        "text": {
          "ru": "Заболевание неизвестно науке.",
          "en": "The disease is unknown to science."
        },
        "level": {
          "ru": "Слишком сильный вывод",
          "en": "Overstated conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "method": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Неудачная диагностика в конкретном случае не означает, что заболевание неизвестно науке.",
          "en": "Failure of diagnostics in one case does not mean the disease is unknown to science."
        }
      }
    ]
  },
  {
    "id": "treatment-not-proof",
    "title": {
      "ru": "Почему?",
      "en": "Why?"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "После обработки рыба перестала чесаться. Почему это ещё не доказывает эффективность лечения?",
      "en": "After treatment, the fish stopped scratching. Why does this still not prove treatment efficacy?"
    },
    "answers": [
      {
        "text": {
          "ru": "Потому что прошло мало времени.",
          "en": "Because too little time has passed."
        },
        "level": {
          "ru": "Недостаточное объяснение",
          "en": "Insufficient explanation"
        },
        "tone": "warn",
        "thinking": "data_limit",
        "scores": {
          "causality": 1,
          "caution": 1,
          "data": 1
        },
        "explain": {
          "ru": "Время наблюдения может быть важным, но само по себе оно не объясняет, почему эффективность лечения ещё не доказана.",
          "en": "Observation time may matter, but by itself it does not explain why treatment efficacy has not yet been proven."
        }
      },
      {
        "text": {
          "ru": "Потому что могли измениться другие условия.",
          "en": "Because other conditions may have changed."
        },
        "level": {
          "ru": "Корректное понимание контроля",
          "en": "Correct understanding of control"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "causality": 3,
          "caution": 3,
          "method": 3
        },
        "explain": {
          "ru": "Если одновременно менялись другие условия, улучшение нельзя уверенно приписать только обработке.",
          "en": "If other conditions changed at the same time, improvement cannot be confidently attributed only to the treatment."
        }
      },
      {
        "text": {
          "ru": "Потому что паразиты исчезают сами.",
          "en": "Because parasites disappear on their own."
        },
        "level": {
          "ru": "Неподтверждённое объяснение",
          "en": "Unsupported explanation"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "causality": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Это отдельная гипотеза, но в условии нет данных, что именно она объясняет изменение поведения.",
          "en": "This is a separate hypothesis, but the scenario provides no data showing that it explains the behavioral change."
        }
      },
      {
        "text": {
          "ru": "Потому что лечение всегда действует позже.",
          "en": "Because treatment always works later."
        },
        "level": {
          "ru": "Категоричное обобщение",
          "en": "Categorical generalization"
        },
        "tone": "bad",
        "thinking": "data_limit",
        "scores": {
          "causality": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Обобщение «всегда» не является доказательством и не учитывает конкретные условия наблюдения.",
          "en": "The word 'always' is not evidence and does not account for the specific conditions of the observation."
        }
      }
    ]
  },
  {
    "id": "staining-purpose",
    "title": {
      "ru": "Зачем?",
      "en": "Why?"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Зачем выполняют окраску мазка?",
      "en": "Why is a smear stained?"
    },
    "answers": [
      {
        "text": {
          "ru": "Чтобы подтвердить диагноз.",
          "en": "To confirm the diagnosis."
        },
        "level": {
          "ru": "Слишком сильная роль метода",
          "en": "Overstated role of the method"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Окраска помогает увидеть и различить структуры, но сама по себе не всегда подтверждает диагноз.",
          "en": "Staining helps reveal and distinguish structures, but by itself it does not always confirm a diagnosis."
        }
      },
      {
        "text": {
          "ru": "Чтобы лучше различить структуры препарата.",
          "en": "To distinguish structures in the preparation more clearly."
        },
        "level": {
          "ru": "Корректное понимание метода",
          "en": "Correct understanding of the method"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 2,
          "caution": 3
        },
        "explain": {
          "ru": "Окраска повышает различимость клеток, бактерий и других структур, помогая корректнее описать препарат.",
          "en": "Staining improves the visibility of cells, bacteria, and other structures, helping the preparation to be described more accurately."
        }
      },
      {
        "text": {
          "ru": "Чтобы уничтожить бактерии.",
          "en": "To kill bacteria."
        },
        "level": {
          "ru": "Ошибка понимания метода",
          "en": "Misunderstanding the method"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Окраска является диагностическим приёмом, а не лечебной обработкой материала.",
          "en": "Staining is a diagnostic technique, not a therapeutic treatment of the material."
        }
      },
      {
        "text": {
          "ru": "Чтобы получить более красивое изображение.",
          "en": "To obtain a prettier image."
        },
        "level": {
          "ru": "Ошибка цели исследования",
          "en": "Wrong aim of the examination"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Визуальная выразительность не является целью окраски; важна диагностическая различимость структур.",
          "en": "Visual appeal is not the aim of staining; diagnostic visibility of structures is what matters."
        }
      }
    ]
  },
  {
    "id": "control-group-purpose",
    "title": {
      "ru": "Зачем?",
      "en": "Why?"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Зачем проводят контрольную группу?",
      "en": "Why is a control group used?"
    },
    "answers": [
      {
        "text": {
          "ru": "Чтобы было больше рыб.",
          "en": "To have more fish."
        },
        "level": {
          "ru": "Ошибка понимания контроля",
          "en": "Misunderstanding of control"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Контрольная группа нужна не просто для увеличения числа животных, а для сравнения условий.",
          "en": "A control group is not used simply to increase the number of animals; it is used to compare conditions."
        }
      },
      {
        "text": {
          "ru": "Чтобы сравнить изменения без воздействия.",
          "en": "To compare changes without the exposure."
        },
        "level": {
          "ru": "Корректное понимание контроля",
          "en": "Correct understanding of control"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "causality": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Контроль помогает отличить эффект воздействия от изменений, которые могли произойти сами или из-за других факторов.",
          "en": "A control helps distinguish the effect of an exposure from changes that could have occurred on their own or because of other factors."
        }
      },
      {
        "text": {
          "ru": "Чтобы увеличить достоверность диагноза.",
          "en": "To make the diagnosis more reliable."
        },
        "level": {
          "ru": "Частичная, но неточная цель",
          "en": "Partial but imprecise aim"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "causality": 1
        },
        "explain": {
          "ru": "Контроль повышает обоснованность причинных выводов, но не является самостоятельным способом поставить диагноз.",
          "en": "Control strengthens causal conclusions, but it is not a stand-alone way to make a diagnosis."
        }
      },
      {
        "text": {
          "ru": "Чтобы быстрее получить результат.",
          "en": "To get the result faster."
        },
        "level": {
          "ru": "Ошибка цели исследования",
          "en": "Wrong aim of the examination"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Контроль обычно нужен для качества вывода, а не для ускорения результата.",
          "en": "Control is usually needed for the quality of the conclusion, not for speeding up the result."
        }
      }
    ]
  },
  {
    "id": "diagnosis-confirmed-when",
    "title": {
      "ru": "Когда?",
      "en": "When?"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Когда диагноз можно считать подтверждённым?",
      "en": "When can a diagnosis be considered confirmed?"
    },
    "answers": [
      {
        "text": {
          "ru": "После обнаружения симптомов.",
          "en": "After symptoms are found."
        },
        "level": {
          "ru": "Преждевременный вывод",
          "en": "Premature conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Симптомы помогают сформировать гипотезу, но сами по себе не подтверждают диагноз.",
          "en": "Symptoms help form a hypothesis, but by themselves they do not confirm a diagnosis."
        }
      },
      {
        "text": {
          "ru": "После первого исследования.",
          "en": "After the first test."
        },
        "level": {
          "ru": "Недостаточность данных",
          "en": "Insufficient data"
        },
        "tone": "warn",
        "thinking": "data_limit",
        "scores": {
          "method": 1,
          "caution": 1,
          "data": 1
        },
        "explain": {
          "ru": "Первое исследование может быть важным, но подтверждение зависит от качества и согласованности всей совокупности данных.",
          "en": "The first test may be important, but confirmation depends on the quality and consistency of the whole body of data."
        }
      },
      {
        "text": {
          "ru": "Когда совокупность данных подтверждает гипотезу.",
          "en": "When the body of evidence supports the hypothesis."
        },
        "level": {
          "ru": "Корректный научный подход",
          "en": "Correct scientific approach"
        },
        "tone": "good",
        "thinking": "hypothesis",
        "scores": {
          "method": 3,
          "caution": 3,
          "data": 3
        },
        "explain": {
          "ru": "Диагноз становится обоснованным, когда гипотеза согласуется с наблюдениями, исследованиями и исключением альтернатив.",
          "en": "A diagnosis becomes justified when the hypothesis is consistent with observations, tests, and exclusion of alternatives."
        }
      },
      {
        "text": {
          "ru": "Когда специалист уверен.",
          "en": "When the specialist is confident."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "bad",
        "thinking": "authority",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Уверенность специалиста важна как профессиональная оценка, но она не заменяет подтверждающие данные.",
          "en": "A specialist's confidence matters as professional judgment, but it does not replace supporting data."
        }
      }
    ]
  },
  {
    "id": "treatment-when",
    "title": {
      "ru": "Когда?",
      "en": "When?"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Когда имеет смысл назначать лечение?",
      "en": "When does it make sense to prescribe treatment?"
    },
    "answers": [
      {
        "text": {
          "ru": "Сразу после появления симптомов.",
          "en": "Immediately after symptoms appear."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Симптомы требуют оценки, но лечение без достаточных данных может быть бесполезным или вредным.",
          "en": "Symptoms require assessment, but treatment without sufficient data may be useless or harmful."
        }
      },
      {
        "text": {
          "ru": "После получения достаточных данных для принятия решения.",
          "en": "After enough data have been obtained to make a decision."
        },
        "level": {
          "ru": "Корректный подход",
          "en": "Correct approach"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "data": 3
        },
        "explain": {
          "ru": "Лечение должно опираться на достаточную информацию о состоянии, вероятной причине и рисках вмешательства.",
          "en": "Treatment should be based on sufficient information about the condition, the likely cause, and the risks of intervention."
        }
      },
      {
        "text": {
          "ru": "После консультации.",
          "en": "After a consultation."
        },
        "level": {
          "ru": "Апелляция к авторитету",
          "en": "Appeal to authority"
        },
        "tone": "warn",
        "thinking": "authority",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Консультация полезна, но решение всё равно должно опираться на данные конкретного случая.",
          "en": "A consultation is useful, but the decision should still rely on data from the specific case."
        }
      },
      {
        "text": {
          "ru": "После бакпосева.",
          "en": "After bacterial culture."
        },
        "level": {
          "ru": "Один метод вместо совокупности данных",
          "en": "One method instead of the whole body of data"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1,
          "data": 1
        },
        "explain": {
          "ru": "Бакпосев может быть частью диагностики, но сам по себе не всегда достаточен для выбора лечения.",
          "en": "Bacterial culture can be part of diagnostics, but by itself it is not always sufficient for choosing treatment."
        }
      }
    ]
  },
  {
    "id": "method-limitations-purpose",
    "title": {
      "ru": "Защита",
      "en": "Protection"
    },
    "image": "",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Зачем знать ограничения метода исследования?",
      "en": "Why is it important to know the limitations of a research method?"
    },
    "answers": [
      {
        "text": {
          "ru": "Чтобы выбрать более дорогой метод.",
          "en": "To choose a more expensive method."
        },
        "level": {
          "ru": "Ошибка цели",
          "en": "Wrong aim"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "data": 0
        },
        "explain": {
          "ru": "Цена метода не определяет корректность вывода; важно понимать, что метод способен и не способен показать.",
          "en": "The price of a method does not determine the correctness of the conclusion; what matters is understanding what the method can and cannot show."
        }
      },
      {
        "text": {
          "ru": "Чтобы понимать, какие выводы можно делать по результатам.",
          "en": "To understand what conclusions can be drawn from the results."
        },
        "level": {
          "ru": "Корректное понимание ограничений",
          "en": "Correct understanding of limitations"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "data": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Знание ограничений защищает от слишком сильных выводов по результатам одного метода.",
          "en": "Knowing the limitations protects against making overly strong conclusions from one method."
        }
      },
      {
        "text": {
          "ru": "Чтобы уменьшить время диагностики.",
          "en": "To reduce diagnostic time."
        },
        "level": {
          "ru": "Ошибка цели",
          "en": "Wrong aim"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "data": 0
        },
        "explain": {
          "ru": "Понимание ограничений нужно прежде всего для корректности вывода, а не для сокращения диагностики любой ценой.",
          "en": "Understanding limitations is primarily needed for correctness of the conclusion, not for shortening diagnostics at any cost."
        }
      },
      {
        "text": {
          "ru": "Чтобы быстрее начать лечение.",
          "en": "To start treatment sooner."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Ограничения метода помогают осторожнее принимать решения, а не автоматически ускорять лечение.",
          "en": "Method limitations help decisions become more cautious; they do not automatically accelerate treatment."
        }
      }
    ]
  },
  {
    "id": "intestinal-crystalline-masses-prognosis",
    "title": {
      "ru": "Прогноз",
      "en": "Prognosis"
    },
    "image": "/images/test/white-crystalline-masses.webp",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Такое состояние кишечника...",
      "en": "This condition of the intestine..."
    },
    "answers": [
      {
        "text": {
          "ru": "совместимо с нормальной функцией кишечника.",
          "en": "is compatible with normal intestinal function."
        },
        "level": {
          "ru": "Вывод не подтверждён",
          "en": "Unsupported conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Выраженное изменение содержимого кишечника не следует считать нормой без дополнительных оснований.",
          "en": "A pronounced change in intestinal contents should not be considered normal without additional grounds."
        }
      },
      {
        "text": {
          "ru": "характерно только для гексамитоза.",
          "en": "is characteristic only of hexamitiasis."
        },
        "level": {
          "ru": "Слишком узкий вывод",
          "en": "Too narrow a conclusion"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "По одной макроскопической картине нельзя сводить состояние кишечника только к одному диагнозу.",
          "en": "A single gross finding should not be reduced to one diagnosis."
        }
      },
      {
        "text": {
          "ru": "указывает на тяжёлое нарушение его функции.",
          "en": "indicates severe impairment of intestinal function."
        },
        "level": {
          "ru": "Обоснованная интерпретация",
          "en": "Justified interpretation"
        },
        "tone": "good",
        "thinking": "interpretation",
        "scores": {
          "observation": 2,
          "caution": 3,
          "data": 2
        },
        "explain": {
          "ru": "Такая картина позволяет говорить о серьёзном нарушении функции кишечника, не подменяя это точным диагнозом.",
          "en": "This appearance supports a conclusion of serious intestinal dysfunction without replacing it with a precise diagnosis."
        }
      },
      {
        "text": {
          "ru": "развивается только при длительном умирании.",
          "en": "develops only during prolonged dying."
        },
        "level": {
          "ru": "Преждевременное объяснение",
          "en": "Premature explanation"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "По виду содержимого кишечника нельзя уверенно установить длительность или механизм умирания.",
          "en": "The appearance of intestinal contents does not allow the duration or mechanism of dying to be established with confidence."
        }
      }
    ]
  },
  {
    "id": "intestinal-crystalline-masses-most-likely",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/white-crystalline-masses.webp",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что наиболее вероятно отражает эта картина?",
      "en": "What is this picture most likely to reflect?"
    },
    "answers": [
      {
        "text": {
          "ru": "Гексамитоз кишечника.",
          "en": "Intestinal hexamitiasis."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Такая картина может встречаться при разных состояниях, поэтому гексамитоз нельзя утверждать без подтверждения.",
          "en": "This picture can occur in different conditions, so hexamitiasis cannot be stated without confirmation."
        }
      },
      {
        "text": {
          "ru": "Бактериальное воспаление кишечника.",
          "en": "Bacterial enteritis."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Бактериальную природу процесса нельзя установить только по внешнему виду содержимого кишечника.",
          "en": "The bacterial nature of the process cannot be established from the gross appearance of intestinal contents alone."
        }
      },
      {
        "text": {
          "ru": "Тяжёлое нарушение функции кишечника.",
          "en": "Severe impairment of intestinal function."
        },
        "level": {
          "ru": "Обоснованная интерпретация",
          "en": "Justified interpretation"
        },
        "tone": "good",
        "thinking": "interpretation",
        "scores": {
          "observation": 2,
          "caution": 3,
          "data": 2
        },
        "explain": {
          "ru": "Это наиболее осторожный вывод: он описывает функциональное нарушение, но не объявляет конкретную причину.",
          "en": "This is the most cautious conclusion: it describes functional disturbance without naming a specific cause."
        }
      },
      {
        "text": {
          "ru": "Последствия длительной агонии.",
          "en": "Consequences of prolonged agony."
        },
        "level": {
          "ru": "Причина не установлена",
          "en": "Cause not established"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Связь с длительной агонией требует дополнительных данных и не следует из одной фотографии.",
          "en": "A link with prolonged agony requires additional data and does not follow from one photograph."
        }
      }
    ]
  },
  {
    "id": "intestinal-crystalline-masses-limits",
    "title": {
      "ru": "Ограничения",
      "en": "Limitations"
    },
    "image": "/images/test/white-crystalline-masses.webp",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На фотографии кишечник заполнен прозрачным желеобразным содержимым. Что можно утверждать наиболее уверенно?",
      "en": "In the photograph, the intestine is filled with transparent jelly-like contents. What can be stated most confidently?"
    },
    "answers": [
      {
        "text": {
          "ru": "Рыба погибла от бактериальной инфекции.",
          "en": "The fish died from a bacterial infection."
        },
        "level": {
          "ru": "Причина не доказана",
          "en": "Cause not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Фотография не позволяет установить бактериальную причину гибели.",
          "en": "The photograph does not allow a bacterial cause of death to be established."
        }
      },
      {
        "text": {
          "ru": "У рыбы гексамитоз.",
          "en": "The fish has hexamitiasis."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "observation": 0,
          "caution": 0,
          "method": 0
        },
        "explain": {
          "ru": "Для гексамитоза нужны диагностические подтверждения, а не только вид кишечного содержимого.",
          "en": "Hexamitiasis requires diagnostic confirmation, not only the appearance of intestinal contents."
        }
      },
      {
        "text": {
          "ru": "Работа кишечника была нарушена.",
          "en": "Intestinal function was impaired."
        },
        "level": {
          "ru": "Корректная осторожная формулировка",
          "en": "Correct cautious formulation"
        },
        "tone": "good",
        "thinking": "interpretation",
        "scores": {
          "observation": 2,
          "caution": 3,
          "data": 2
        },
        "explain": {
          "ru": "Это наиболее уверенный вывод из фотографии: функция кишечника нарушена, но причина ещё не названа.",
          "en": "This is the most confident conclusion from the photograph: intestinal function was impaired, but the cause has not yet been named."
        }
      },
      {
        "text": {
          "ru": "Рыба погибала длительное время.",
          "en": "The fish was dying for a long time."
        },
        "level": {
          "ru": "Преждевременная реконструкция",
          "en": "Premature reconstruction"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Длительность умирания нельзя надёжно восстановить по одному такому признаку.",
          "en": "The duration of dying cannot be reliably reconstructed from one sign like this."
        }
      }
    ]
  },
  {
    "id": "hexamitids-first-action",
    "title": {
      "ru": "Решение",
      "en": "Decision"
    },
    "image": "/images/test/hexamitids.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Если в кишечнике обнаружены эти организмы, что следует сделать в первую очередь?",
      "en": "If these organisms are found in the intestine, what should be done first?"
    },
    "answers": [
      {
        "text": {
          "ru": "Назначить метронидазол.",
          "en": "Prescribe metronidazole."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Обнаружение организмов ещё не доказывает их роль и не определяет лечение автоматически.",
          "en": "Finding organisms does not yet prove their role and does not automatically determine treatment."
        }
      },
      {
        "text": {
          "ru": "Оценить их роль в патологическом процессе.",
          "en": "Assess their role in the pathological process."
        },
        "level": {
          "ru": "Корректный следующий шаг",
          "en": "Correct next step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "causality": 3
        },
        "explain": {
          "ru": "Важно понять, являются ли организмы значимым фактором болезни или сопутствующей находкой.",
          "en": "It is important to understand whether the organisms are a significant disease factor or an incidental finding."
        }
      },
      {
        "text": {
          "ru": "Назначить комбинированную терапию.",
          "en": "Prescribe combination therapy."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Расширение лечения без оценки роли находки повышает риск лишнего вмешательства.",
          "en": "Expanding treatment without assessing the role of the finding increases the risk of unnecessary intervention."
        }
      },
      {
        "text": {
          "ru": "Провести обработку аквариума.",
          "en": "Treat the aquarium."
        },
        "level": {
          "ru": "Преждевременное управление системой",
          "en": "Premature system-level intervention"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Решение об обработке системы требует оценки клинической картины, распространённости и значения находки.",
          "en": "A decision to treat the system requires assessment of the clinical picture, prevalence, and significance of the finding."
        }
      }
    ]
  },
  {
    "id": "hexamitids-diagnostic-meaning",
    "title": {
      "ru": "Значение",
      "en": "Significance"
    },
    "image": "/images/test/hexamitids.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что необходимо определить после обнаружения этих организмов?",
      "en": "What needs to be determined after these organisms are found?"
    },
    "answers": [
      {
        "text": {
          "ru": "Их чувствительность к метронидазолу.",
          "en": "Their sensitivity to metronidazole."
        },
        "level": {
          "ru": "Преждевременный фокус на лечении",
          "en": "Premature focus on treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Сначала нужно понять диагностическое значение находки, а не сразу переходить к препарату.",
          "en": "First, the diagnostic significance of the finding should be understood, rather than moving directly to a drug."
        }
      },
      {
        "text": {
          "ru": "Их диагностическое значение.",
          "en": "Their diagnostic significance."
        },
        "level": {
          "ru": "Корректный методический шаг",
          "en": "Correct methodological step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "caution": 3,
          "causality": 2
        },
        "explain": {
          "ru": "После обнаружения организма важно оценить, что эта находка означает в контексте состояния рыбы.",
          "en": "After an organism is found, it is important to assess what the finding means in the context of the fish's condition."
        }
      },
      {
        "text": {
          "ru": "Видовую принадлежность.",
          "en": "Their species identity."
        },
        "level": {
          "ru": "Полезно, но недостаточно",
          "en": "Useful but insufficient"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Определение вида может быть полезным, но само по себе не отвечает на вопрос о роли организма в патологии.",
          "en": "Species identification may be useful, but by itself it does not answer the question of the organism's role in pathology."
        }
      },
      {
        "text": {
          "ru": "Необходимость обработки аквариума.",
          "en": "Whether the aquarium needs treatment."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Необходимость обработки нельзя выводить из факта обнаружения без оценки значения и распространённости.",
          "en": "The need for treatment cannot be inferred from detection alone without assessing significance and prevalence."
        }
      }
    ]
  },
  {
    "id": "trichomonads-presence",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/trichomonads.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что можно утверждать после обнаружения этих организмов?",
      "en": "What can be stated after these organisms are found?"
    },
    "answers": [
      {
        "text": {
          "ru": "Они вызвали заболевание.",
          "en": "They caused the disease."
        },
        "level": {
          "ru": "Причинная роль не доказана",
          "en": "Causal role not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Присутствие организмов не доказывает, что именно они вызвали заболевание.",
          "en": "The presence of organisms does not prove that they caused the disease."
        }
      },
      {
        "text": {
          "ru": "Необходимо специфическое лечение.",
          "en": "Specific treatment is required."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение должно следовать из оценки значения находки, а не из одного факта обнаружения.",
          "en": "Treatment should follow from assessment of the finding's significance, not from detection alone."
        }
      },
      {
        "text": {
          "ru": "Они присутствуют в кишечнике.",
          "en": "They are present in the intestine."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "method": 2
        },
        "explain": {
          "ru": "Это точная формулировка результата исследования без преждевременного вывода о причине.",
          "en": "This is a precise formulation of the test result without a premature conclusion about cause."
        }
      },
      {
        "text": {
          "ru": "Требуется обработка всего аквариума.",
          "en": "The whole aquarium must be treated."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Обработка всего аквариума требует дополнительных данных о рисках, распространении и клиническом значении.",
          "en": "Treating the whole aquarium requires additional data on risks, spread, and clinical significance."
        }
      }
    ]
  },
  {
    "id": "dactylogyrus-next-meaning",
    "title": {
      "ru": "Значение",
      "en": "Significance"
    },
    "image": "/images/test/dactylogyrus.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На жабрах обнаружен этот паразит. Что следует сделать дальше?",
      "en": "This parasite was found on the gills. What should be done next?"
    },
    "answers": [
      {
        "text": {
          "ru": "Назначить лечение.",
          "en": "Prescribe treatment."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Факт обнаружения паразита ещё не показывает степень поражения и необходимость немедленного лечения.",
          "en": "Detection of a parasite does not yet show the severity of infestation or the need for immediate treatment."
        }
      },
      {
        "text": {
          "ru": "Оценить количество паразитов и состояние жабр.",
          "en": "Assess parasite numbers and gill condition."
        },
        "level": {
          "ru": "Корректный следующий шаг",
          "en": "Correct next step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Значение находки зависит от численности паразитов и выраженности поражения жабр.",
          "en": "The significance of the finding depends on parasite burden and the severity of gill lesions."
        }
      },
      {
        "text": {
          "ru": "Обработать весь аквариум.",
          "en": "Treat the whole aquarium."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Решение об обработке всей системы требует оценки масштаба проблемы и рисков.",
          "en": "A decision to treat the whole system requires assessment of the scale of the problem and the risks."
        }
      },
      {
        "text": {
          "ru": "Сделать вывод, что причина гибели установлена.",
          "en": "Conclude that the cause of death has been established."
        },
        "level": {
          "ru": "Причина не доказана",
          "en": "Cause not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Обнаружение паразита не доказывает, что именно он стал причиной гибели.",
          "en": "Detection of a parasite does not prove that it caused the death."
        }
      }
    ]
  },
  {
    "id": "dactylogyrus-presence",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/dactylogyrus.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На препарате с жабр обнаружен Dactylogyrus. Что можно утверждать?",
      "en": "Dactylogyrus was found in a gill preparation. What can be stated?"
    },
    "answers": [
      {
        "text": {
          "ru": "Он стал причиной гибели рыбы.",
          "en": "It caused the fish's death."
        },
        "level": {
          "ru": "Причинная связь не установлена",
          "en": "Causal relationship not established"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Причину гибели нельзя установить только по факту обнаружения паразита.",
          "en": "The cause of death cannot be established only from finding the parasite."
        }
      },
      {
        "text": {
          "ru": "Необходимо срочное лечение.",
          "en": "Urgent treatment is required."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Срочность лечения зависит от состояния рыбы, количества паразитов и поражения жабр.",
          "en": "Urgency of treatment depends on the fish's condition, parasite numbers, and gill lesions."
        }
      },
      {
        "text": {
          "ru": "Паразит присутствует на жабрах.",
          "en": "The parasite is present on the gills."
        },
        "level": {
          "ru": "Корректное наблюдение",
          "en": "Correct observation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "observation": 3,
          "caution": 3,
          "method": 2
        },
        "explain": {
          "ru": "Это утверждение прямо следует из результата микроскопии.",
          "en": "This statement follows directly from the microscopy result."
        }
      },
      {
        "text": {
          "ru": "Все рыбы заражены.",
          "en": "All fish are infected."
        },
        "level": {
          "ru": "Вывод по неполному наблюдению",
          "en": "Conclusion from incomplete observation"
        },
        "tone": "bad",
        "thinking": "survivorship",
        "scores": {
          "observation": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "По одному препарату нельзя утверждать заражение всех рыб.",
          "en": "Infection of all fish cannot be stated from one preparation."
        }
      }
    ]
  },
  {
    "id": "dactylogyrus-next-step",
    "title": {
      "ru": "Следующий шаг",
      "en": "Next step"
    },
    "image": "/images/test/dactylogyrus.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На жабрах обнаружен Dactylogyrus. Что наиболее важно оценить?",
      "en": "Dactylogyrus was found on the gills. What is most important to assess?"
    },
    "answers": [
      {
        "text": {
          "ru": "Вид паразита.",
          "en": "The parasite species."
        },
        "level": {
          "ru": "Полезно, но недостаточно",
          "en": "Useful but insufficient"
        },
        "tone": "warn",
        "thinking": "method_error",
        "scores": {
          "method": 1,
          "caution": 1
        },
        "explain": {
          "ru": "Видовая принадлежность может быть полезна, но для оценки значения находки важнее нагрузка и поражение жабр.",
          "en": "Species identity may be useful, but burden and gill lesions are more important for assessing the significance of the finding."
        }
      },
      {
        "text": {
          "ru": "Количество паразитов и степень поражения жабр.",
          "en": "Parasite numbers and the severity of gill lesions."
        },
        "level": {
          "ru": "Корректная оценка значимости",
          "en": "Correct assessment of significance"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Именно количество паразитов и состояние жабр помогают понять клиническое значение находки.",
          "en": "Parasite burden and gill condition are what help determine the clinical significance of the finding."
        }
      },
      {
        "text": {
          "ru": "Эффективность метронидазола.",
          "en": "The efficacy of metronidazole."
        },
        "level": {
          "ru": "Ошибка выбора метода лечения",
          "en": "Wrong treatment-method choice"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Метронидазол не является логичным следующим шагом для оценки Dactylogyrus на жабрах.",
          "en": "Metronidazole is not a logical next step for assessing Dactylogyrus on the gills."
        }
      },
      {
        "text": {
          "ru": "Необходимость полной дезинфекции системы.",
          "en": "The need for full system disinfection."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Полная дезинфекция системы не следует из одной находки без оценки масштаба и контекста.",
          "en": "Full system disinfection does not follow from one finding without assessment of scale and context."
        }
      }
    ]
  },
  {
    "id": "dactylogyrus-cause-question",
    "title": {
      "ru": "Причина",
      "en": "Cause"
    },
    "image": "/images/test/dactylogyrus.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Можно ли по этому препарату сделать вывод, что Dactylogyrus стал причиной гибели рыбы?",
      "en": "Can this preparation justify the conclusion that Dactylogyrus caused the fish's death?"
    },
    "answers": [
      {
        "text": {
          "ru": "Да.",
          "en": "Yes."
        },
        "level": {
          "ru": "Причинная связь не доказана",
          "en": "Causal relationship not proven"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "observation": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Один препарат показывает присутствие паразита, но не доказывает его роль в гибели.",
          "en": "One preparation shows the parasite is present, but it does not prove its role in death."
        }
      },
      {
        "text": {
          "ru": "Только после лечения.",
          "en": "Only after treatment."
        },
        "level": {
          "ru": "Лечение не доказывает причину",
          "en": "Treatment does not prove the cause"
        },
        "tone": "bad",
        "thinking": "causality_error",
        "scores": {
          "method": 0,
          "caution": 0,
          "causality": 0
        },
        "explain": {
          "ru": "Ответ на лечение сам по себе не является строгим доказательством исходной причины.",
          "en": "Response to treatment by itself is not strict evidence of the original cause."
        }
      },
      {
        "text": {
          "ru": "Только после оценки жабр и численности паразитов.",
          "en": "Only after assessing the gills and parasite burden."
        },
        "level": {
          "ru": "Корректная осторожная позиция",
          "en": "Correct cautious position"
        },
        "tone": "good",
        "thinking": "hypothesis",
        "scores": {
          "method": 3,
          "caution": 3,
          "causality": 3
        },
        "explain": {
          "ru": "Причинную роль можно обсуждать только после оценки нагрузки паразитов, поражения жабр и общей картины.",
          "en": "A causal role can be discussed only after assessing parasite burden, gill lesions, and the overall picture."
        }
      },
      {
        "text": {
          "ru": "Нет, это случайная находка.",
          "en": "No, it is an incidental finding."
        },
        "level": {
          "ru": "Слишком сильное отрицание",
          "en": "Overstated denial"
        },
        "tone": "warn",
        "thinking": "data_limit",
        "scores": {
          "method": 1,
          "caution": 1,
          "data": 1
        },
        "explain": {
          "ru": "Случайность находки тоже нельзя утверждать без оценки её количества и связи с поражением жабр.",
          "en": "Incidental status also cannot be claimed without assessing quantity and association with gill lesions."
        }
      }
    ]
  },
  {
    "id": "cryptobia-identification-check",
    "title": {
      "ru": "Наблюдение",
      "en": "Observation"
    },
    "image": "/images/test/cryptobia.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На препарате обнаружены многочисленные жгутиконосцы. Что следует сделать?",
      "en": "Numerous flagellates were found in the preparation. What should be done?"
    },
    "answers": [
      {
        "text": {
          "ru": "Назначить метронидазол.",
          "en": "Prescribe metronidazole."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Назначение препарата нельзя делать только по общему признаку «жгутиконосцы».",
          "en": "A drug should not be prescribed based only on the general sign 'flagellates'."
        }
      },
      {
        "text": {
          "ru": "Назначить комбинированную терапию.",
          "en": "Prescribe combination therapy."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Комбинированное лечение без точного понимания находки может быть избыточным и вредным.",
          "en": "Combination treatment without a precise understanding of the finding may be excessive and harmful."
        }
      },
      {
        "text": {
          "ru": "Убедиться, что определение организма выполнено правильно.",
          "en": "Make sure the organism was identified correctly."
        },
        "level": {
          "ru": "Корректный методический шаг",
          "en": "Correct methodological step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Сначала нужно убедиться в правильности определения, иначе последующие выводы и решения будут ненадёжны.",
          "en": "First, the identification should be checked; otherwise the following conclusions and decisions will be unreliable."
        }
      },
      {
        "text": {
          "ru": "Провести обработку всего аквариума.",
          "en": "Treat the whole aquarium."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Обработка всей системы требует оценки вида организма, значения находки и клинической ситуации.",
          "en": "Treating the whole system requires assessment of the organism, the significance of the finding, and the clinical situation."
        }
      }
    ]
  },
  {
    "id": "cryptobia-diagnosis",
    "title": {
      "ru": "Диагноз",
      "en": "Diagnosis"
    },
    "image": "/images/test/cryptobia.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что можно утверждать по этому препарату?",
      "en": "What can be stated from this preparation?"
    },
    "answers": [
      {
        "text": {
          "ru": "Обнаружены Hexamita.",
          "en": "Hexamita were found."
        },
        "level": {
          "ru": "Возможная ошибка определения",
          "en": "Possible identification error"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "По такой формулировке нельзя автоматически переносить находку в диагноз Hexamita без корректного определения.",
          "en": "This wording should not automatically turn the finding into a Hexamita diagnosis without correct identification."
        }
      },
      {
        "text": {
          "ru": "Обнаружен тяжёлый гексамитоз.",
          "en": "Severe hexamitiasis was found."
        },
        "level": {
          "ru": "Преждевременный диагноз",
          "en": "Premature diagnosis"
        },
        "tone": "bad",
        "thinking": "premature_conclusion",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Тяжесть и диагноз нельзя утверждать только по факту видимых жгутиконосцев.",
          "en": "Severity and diagnosis cannot be stated only from the fact that visible flagellates are present."
        }
      },
      {
        "text": {
          "ru": "Обнаружены жгутиконосцы, требующие правильного определения.",
          "en": "Flagellates were found and need proper identification."
        },
        "level": {
          "ru": "Корректная формулировка",
          "en": "Correct formulation"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это фиксирует наблюдение и оставляет место для проверки определения организма.",
          "en": "This records the observation while leaving room to verify the organism's identity."
        }
      },
      {
        "text": {
          "ru": "Требуется лечение метронидазолом.",
          "en": "Metronidazole treatment is required."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Выбор лечения невозможен без понимания, что именно обнаружено и какую роль это играет.",
          "en": "Treatment cannot be chosen without understanding what was found and what role it plays."
        }
      }
    ]
  },
  {
    "id": "dactylogyrus-treatment-choice",
    "title": {
      "ru": "Определение",
      "en": "Identification"
    },
    "image": "/images/test/dactylogyrus.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "На жабрах обнаружен этот паразит. Что делать?",
      "en": "This parasite was found on the gills. What should be done?"
    },
    "answers": [
      {
        "text": {
          "ru": "Празиквантел.",
          "en": "Praziquantel."
        },
        "level": {
          "ru": "Преждевременный выбор препарата",
          "en": "Premature drug choice"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Даже подходящий препарат не должен выбираться до оценки численности паразитов и состояния жабр.",
          "en": "Even a suitable drug should not be chosen before parasite burden and gill condition have been assessed."
        }
      },
      {
        "text": {
          "ru": "Формалин.",
          "en": "Formalin."
        },
        "level": {
          "ru": "Преждевременный выбор препарата",
          "en": "Premature drug choice"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Выбор обработки требует оценки значимости находки и рисков для рыбы.",
          "en": "The choice of treatment requires assessment of the finding's significance and the risks to the fish."
        }
      },
      {
        "text": {
          "ru": "Обработать весь аквариум.",
          "en": "Treat the whole aquarium."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Обработка всего аквариума не должна следовать из одной находки без оценки распространённости.",
          "en": "Treatment of the whole aquarium should not follow from one finding without assessing prevalence."
        }
      },
      {
        "text": {
          "ru": "Оценить количество паразитов и состояние жабр.",
          "en": "Assess parasite numbers and gill condition."
        },
        "level": {
          "ru": "Корректный следующий шаг",
          "en": "Correct next step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Это позволяет понять клиническое значение находки и только затем обсуждать лечение.",
          "en": "This helps determine the clinical significance of the finding before treatment is discussed."
        }
      }
    ]
  },
  {
    "id": "trichodina-significance",
    "title": {
      "ru": "Значение",
      "en": "Significance"
    },
    "image": "/images/test/trichodina.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Обнаружены многочисленные инфузории.",
      "en": "Numerous ciliates were found."
    },
    "answers": [
      {
        "text": {
          "ru": "Формалин.",
          "en": "Formalin."
        },
        "level": {
          "ru": "Преждевременный выбор препарата",
          "en": "Premature drug choice"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Даже при наличии инфузорий сначала нужно оценить тяжесть поражения и состояние рыбы.",
          "en": "Even when ciliates are present, severity of infestation and the fish's condition should be assessed first."
        }
      },
      {
        "text": {
          "ru": "Соль.",
          "en": "Salt."
        },
        "level": {
          "ru": "Преждевременный выбор обработки",
          "en": "Premature treatment choice"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Выбор обработки без оценки клинического значения находки является преждевременным.",
          "en": "Choosing treatment without assessing the clinical significance of the finding is premature."
        }
      },
      {
        "text": {
          "ru": "Комбинированная обработка.",
          "en": "Combination treatment."
        },
        "level": {
          "ru": "Избыточное преждевременное решение",
          "en": "Excessive premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Комбинированная обработка повышает нагрузку и не должна назначаться только по факту обнаружения.",
          "en": "Combination treatment increases the burden and should not be prescribed solely because organisms were found."
        }
      },
      {
        "text": {
          "ru": "Оценить степень поражения и состояние рыбы.",
          "en": "Assess severity of infestation and the fish's condition."
        },
        "level": {
          "ru": "Корректная оценка значимости",
          "en": "Correct assessment of significance"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Количество инфузорий и состояние рыбы определяют, является ли находка клинически значимой.",
          "en": "Ciliate numbers and the fish's condition determine whether the finding is clinically significant."
        }
      }
    ]
  },
  {
    "id": "cryptobia-not-hexamita",
    "title": {
      "ru": "Вывод",
      "en": "Conclusion"
    },
    "image": "/images/test/cryptobia.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что делать при таком сильном \"гексамитозе\"?",
      "en": "What should be done with such severe 'hexamitiasis'?"
    },
    "answers": [
      {
        "text": {
          "ru": "Метронидазол.",
          "en": "Metronidazole."
        },
        "level": {
          "ru": "Преждевременное лечение",
          "en": "Premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение выбрано до проверки самого определения организма.",
          "en": "Treatment was chosen before the organism's identification itself was checked."
        }
      },
      {
        "text": {
          "ru": "Фуразолидон + метронидазол.",
          "en": "Furazolidone + metronidazole."
        },
        "level": {
          "ru": "Избыточное преждевременное лечение",
          "en": "Excessive premature treatment"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Комбинированное лечение особенно рискованно, если исходное определение не подтверждено.",
          "en": "Combination treatment is especially risky if the original identification has not been confirmed."
        }
      },
      {
        "text": {
          "ru": "Ничего. Рыба мертва.",
          "en": "Nothing. The fish is dead."
        },
        "level": {
          "ru": "Уход от диагностического вывода",
          "en": "Avoiding the diagnostic conclusion"
        },
        "tone": "bad",
        "thinking": "method_error",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Даже посмертный материал может быть важен для правильной диагностики и выводов по случаю.",
          "en": "Even postmortem material can be important for correct diagnostics and conclusions about the case."
        }
      },
      {
        "text": {
          "ru": "Это не гексамиты.",
          "en": "These are not hexamites."
        },
        "level": {
          "ru": "Корректная проверка определения",
          "en": "Correct identification check"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Первый шаг — не лечить название, а проверить, правильно ли определён организм.",
          "en": "The first step is not to treat a name, but to check whether the organism was identified correctly."
        }
      }
    ]
  },
  {
    "id": "cryptocaryon-identification-check",
    "title": {
      "ru": "Следующий шаг",
      "en": "Next step"
    },
    "image": "/images/test/cryptocaryon_trophont.gif",
    "mediaType": "microscope",
    "caption": {
      "ru": "",
      "en": ""
    },
    "text": {
      "ru": "Что следует сделать?",
      "en": "What should be done?"
    },
    "answers": [
      {
        "text": {
          "ru": "Лечить.",
          "en": "Treat."
        },
        "level": {
          "ru": "Преждевременное решение",
          "en": "Premature decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Лечение нельзя выбирать до проверки определения организма и оценки клинической картины.",
          "en": "Treatment cannot be chosen before the organism's identification and the clinical picture have been assessed."
        }
      },
      {
        "text": {
          "ru": "Лечить всех рыб.",
          "en": "Treat all fish."
        },
        "level": {
          "ru": "Преждевременное решение для всей группы",
          "en": "Premature group-level decision"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0,
          "data": 0
        },
        "explain": {
          "ru": "Решение для всех рыб требует данных о распространённости и рисках, а не только одного наблюдения.",
          "en": "A decision for all fish requires data on prevalence and risks, not just one observation."
        }
      },
      {
        "text": {
          "ru": "Обработать систему.",
          "en": "Treat the system."
        },
        "level": {
          "ru": "Преждевременное управление системой",
          "en": "Premature system-level intervention"
        },
        "tone": "bad",
        "thinking": "premature_decision",
        "scores": {
          "method": 0,
          "caution": 0
        },
        "explain": {
          "ru": "Обработка системы должна следовать после подтверждения находки и оценки ситуации.",
          "en": "System treatment should follow confirmation of the finding and assessment of the situation."
        }
      },
      {
        "text": {
          "ru": "Убедиться, что организм определён правильно.",
          "en": "Make sure the organism was identified correctly."
        },
        "level": {
          "ru": "Корректный методический шаг",
          "en": "Correct methodological step"
        },
        "tone": "good",
        "thinking": "observation",
        "scores": {
          "method": 3,
          "observation": 3,
          "caution": 3
        },
        "explain": {
          "ru": "Правильное определение организма является основой для дальнейших выводов и решений.",
          "en": "Correct organism identification is the basis for further conclusions and decisions."
        }
      }
    ]
  }
];

export const scaleNames = {
  "observation": {
    "ru": "Наблюдение",
    "en": "Observation"
  },
  "caution": {
    "ru": "Осторожность выводов",
    "en": "Caution in conclusions"
  },
  "data": {
    "ru": "Ограничения данных",
    "en": "Data limitations"
  },
  "causality": {
    "ru": "Причинность",
    "en": "Causality"
  },
  "method": {
    "ru": "Понимание метода",
    "en": "Understanding the method"
  }
};

export const recommendations = {
  "observation": [
    [
      {
        "ru": "Fossa Method",
        "en": "Fossa Method"
      },
      {
        "ru": "/ru/posts/fossa-method/",
        "en": "/en/posts/fossa-method/"
      }
    ],
    [
      {
        "ru": "Летающий слон",
        "en": "The Flying Elephant"
      },
      {
        "ru": "/ru/posts/elephantfly/",
        "en": "/en/posts/elephantfly/"
      }
    ]
  ],
  "caution": [
    [
      {
        "ru": "Летающий слон",
        "en": "The Flying Elephant"
      },
      {
        "ru": "/ru/posts/elephantfly/",
        "en": "/en/posts/elephantfly/"
      }
    ]
  ],
  "data": [
    [
      {
        "ru": "Fossa Method",
        "en": "Fossa Method"
      },
      {
        "ru": "/ru/posts/fossa-method/",
        "en": "/en/posts/fossa-method/"
      }
    ]
  ],
  "causality": [
    [
      {
        "ru": "Летающий слон",
        "en": "The Flying Elephant"
      },
      {
        "ru": "/ru/posts/elephantfly/",
        "en": "/en/posts/elephantfly/"
      }
    ]
  ],
  "method": [
    [
      {
        "ru": "Диагностический конструктор",
        "en": "Diagnostic Constructor"
      },
      {
        "ru": "/ru/tools/",
        "en": "/en/tools/"
      }
    ]
  ]
};

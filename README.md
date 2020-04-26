## 구조 설계

- App - container component
    - UnitList (학습지 상세 편집)
        - Unit
            - Button
    - UnitList  (문장 교체/추가)
        - Unit
            - Button

## Presentational Components

### Unit Item

: 문제를 렌더해주는 item

```tsx
UnitItem: {
	id: number;
	unitCode: number;
	unitName: string;
	problemType: 'Subjective' | 'Multiple';
  problemUrl: string;
}
```

**props**

- unitInfo

    (id, problemType, unitName, problemUrl)

- actionData

    map 돌면서 버튼들을 렌더 해준다.

    ```jsx
    actionData:[
    	{name: '유사문항', action: () => {}}, // 해당 문제가 select되어 있을시, active 되어야 한다.
    	{name: '삭제', action: () => {}}
    ]
    ```

유사문제를 보여주고, 삭제를 하는 행동의 책임은 Unit item 컴포넌트가 가지고 있지 않다.

### Button

- 버튼 스타일을 가지고 있다.
- active, deactive css 가 있다.

### Unit List

:문제리스트와 타이틀, 서브 타이틀을 가지고 있는 컴포넌트

**props**

- title: string
- subTitle?: string
- unitData: Unit[]

unitData가 없을 시에는 props로 받은 noticeComponent를 띄워준다.
- 컴포넌트를 props로 넘겨줄 수 있나? children을 사용

## Container Component

### App

: 문제 list데이터와 상태를 가지고 있는 컴포넌트 (class로 만들기)

**props**

**states**

- problemUnitList: UnitItem[]
- similerUnitList: UnitItem[]
- selectedUnit: UnitItem

**methods**

- deleteUnit(unit)
- swapUnit(unit, targetUnit)
- addUnit(unit)

**data fetching**

- 문제 list를 로딩해야 한다.

**TODO**

리액트 프레젠 테이셔널 컴포넌트, 컨테이너 컴포넌트 확인하기## 구조 설계
                                 
                                 - App - container component
                                     - UnitList (학습지 상세 편집)
                                         - Unit
                                             - Button
                                     - UnitList  (문장 교체/추가)
                                         - Unit
                                             - Button
                                 
                                 ## Presentational Components
                                 
                                 ### Unit Item
                                 
                                 : 문제를 렌더해주는 item
                                 
                                 ```tsx
                                 UnitItem: {
                                 	id: number;
                                 	unitCode: number;
                                 	unitName: string;
                                 	problemType: 'Subjective' | 'Multiple';
                                   problemUrl: string;
                                 }
                                 ```
                                 
                                 **props**
                                 
                                 - unitInfo
                                 
                                     (id, problemType, unitName, problemUrl)
                                 
                                 - actionData
                                 
                                     map 돌면서 버튼들을 렌더 해준다.
                                 
                                     ```jsx
                                     actionData:[
                                     	{name: '유사문항', action: () => {}}, // 해당 문제가 select되어 있을시, active 되어야 한다.
                                     	{name: '삭제', action: () => {}}
                                     ]
                                     ```
                                 
                                 유사문제를 보여주고, 삭제를 하는 행동의 책임은 Unit item 컴포넌트가 가지고 있지 않다.
                                 
                                 ### Button
                                 
                                 - 버튼 스타일을 가지고 있다.
                                 - active, deactive css 가 있다.
                                 
                                 ### Unit List
                                 
                                 :문제리스트와 타이틀, 서브 타이틀을 가지고 있는 컴포넌트
                                 
                                 **props**
                                 
                                 - title: string
                                 - subTitle?: string
                                 - unitData: Unit[]
                                 
                                 unitData가 없을 시에는 props로 받은 noticeComponent를 띄워준다.
                                 - 컴포넌트를 props로 넘겨줄 수 있나? children을 사용
                                 
                                 ## Container Component
                                 
                                 ### App
                                 
                                 : 문제 list데이터와 상태를 가지고 있는 컴포넌트 (class로 만들기)
                                 
                                 **props**
                                 
                                 **states**
                                 
                                 - problemUnitList: UnitItem[]
                                 - similerUnitList: UnitItem[]
                                 - selectedUnit: UnitItem
                                 
                                 **methods**
                                 
                                 - deleteUnit(unit)
                                 - swapUnit(unit, targetUnit)
                                 - addUnit(unit)
                                 
                                 **data fetching**
                                 
                                 - 문제 list를 로딩해야 한다.
                                 
                                 **TODO**
                                 
                                 리액트 프레젠 테이셔널 컴포넌트, 컨테이너 컴포넌트 확인하기

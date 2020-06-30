function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            FixBit Settings
          </Text>
        }>
        <Toggle
          settingsKey="hour.fixed"
          label="Make hour numbers stationary?"
          />
       <Text align="center">
          Indicator Color
        </Text>
        <ColorSelect
          settingsKey="indicator.color"
          label="yolo"
          colors={[
            {color: 'red'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}>/</ColorSelect> 
        <Toggle
          settingsKey="indicator.seconds"
          label="Show seconds indicator?"
          />
        

      </Section>
      
    </Page>
  );
}

registerSettingsPage(settingsComponent);

require 'rails_helper'

describe 'User' do
  it 'can see board' do
    visit root_path
    expect(page).to have_css('.board')
    

  end



end

class GamesController < ApplicationController

  def index
    @spots = Spot.all
  end
end

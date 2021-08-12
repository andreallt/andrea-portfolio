class DesignProjectsController < ApplicationController
  before_action :authorize_request, only: [:update, :create, :destroy]
  before_action :set_design_project, only: [:show, :update, :destroy]

  # GET /admins
  def index
    @design_project = DesignProject.all

    render json: @design_project
  end

  # GET /admins/1
  def show
    render json: @design_project
  end

  # POST /admins
  def create
    @design_project = DesignProject.new(design_project_params)

    if @design_project.save
      render json: @design_project, status: :created, location: @design_project
    else
      render json: @design_project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admins/1
  def update
    if @design_project.update(design_project_params)
      render json: @design_project
    else
      render json: @design_project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @design_project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_design_project
      @design_project = DesignProject.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def design_project_params
      params.require(:design_project).permit(:name, :image_1, :image_2, :image_3, :e_url, :detail, :category, :admin_id)
    end


end
